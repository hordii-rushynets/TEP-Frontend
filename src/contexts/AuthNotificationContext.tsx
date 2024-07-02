"use client";

import { createContext, useContext, useState } from "react";

export type AuthNotificationContext = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  email: string;
  setTitle: (v: string) => void;
};

const defaultAuthNotificationValues = {
  isOpen: false,
  setIsOpen: () => {},
  email: "",
  setTitle: () => {},
};

const AuthNotificationContext = createContext<AuthNotificationContext>(defaultAuthNotificationValues);

export type AuthNotificationProviderProps = {
  children?: React.ReactNode;
};

export function AuthNotificationProvider(props: AuthNotificationProviderProps) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [email, setTitle] = useState("");

  return (
    <AuthNotificationContext.Provider
      value={{
        isOpen,
        email,
        setIsOpen,
        setTitle,
      }}
    >
      {children}
    </AuthNotificationContext.Provider>
  );
}

export function useAuthNotificationContext() {
  return useContext(AuthNotificationContext);
}
