"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useNotificationContext } from './NotificationContext';
import { useRouter } from 'next/navigation';
import { AuthUrl } from 'route-urls';

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  refreshToken: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const APIurl = process.env.NEXT_PUBLIC_API_URL

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { setIsOpen, setText } = useNotificationContext();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('TEPAccessToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (accessToken: string, refreshToken: string) => {
    localStorage.setItem('TEPAccessToken', accessToken); 
    localStorage.setItem('TEPRefreshToken', refreshToken); 
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('TEPAccessToken');
    localStorage.removeItem('TEPRefreshToken');
    setIsAuthenticated(false);
  };

  const refreshToken = async () => {
    const token = localStorage.getItem("TEPRefreshToken");

    await fetch(`${APIurl}/api/account/token/refresh/`, {
      method: 'POST',
      body: JSON.stringify({
        "refresh": token
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        else if (response.status === 400) {
          logout();
          setText("Будь ласка, авторизуйтесь");
          setIsOpen(true);
          router.push(AuthUrl.getSignIn());
        }
        return;
      })
      .then(data => {
        localStorage.setItem("TEPAccessToken", data.access);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
