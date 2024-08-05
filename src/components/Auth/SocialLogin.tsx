import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { ButtonBase } from "common/ui";
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin, CodeResponse, TokenResponse } from '@react-oauth/google';
import { useAuth } from "contexts/AuthContext";
import { useAuthNotificationContext } from "contexts/AuthNotificationContext";
import { useRouter } from "next/navigation";
import { useLocalization } from "contexts/LocalizationContext";

export type SocialLoginProps = {
  onGoogleClick?: () => void;
  onFBClick?: () => void;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';

export function SocialLogin({ onFBClick, onGoogleClick }: SocialLoginProps) {
  const { setIsOpen, setTitle } = useAuthNotificationContext();
  const { login } = useAuth();
  const {staticData} = useLocalization();
  
  const router = useRouter();

  const getIdToken = async (code: string): Promise<{id_token: string} | undefined> => {
    const response = await fetch(GOOGLE_TOKEN_URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
        redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!,
        grant_type: 'authorization_code',
      }),
    })

    if (response.ok) {
      return await response.json();
    }
  }

  const handleLoginSuccess = async (codeResponse: Omit<CodeResponse, "error" | "error_description" | "error_uri">) => {
    try {
      const code = codeResponse.code;
      const tokens = await getIdToken(code);
      fetch(`${apiUrl}/api/account/auth/google/`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: tokens?.id_token,
        })
      }).then(response => {
        if (response.status === 200) {
            return response.json()
        }
        else {
            return;
        }
      })
      .then(data => {
        login(data.access, data.refresh);
        setTitle(data.email);
        setIsOpen(true);
        router.push('/account');
      });
    } catch (error) {
      console.error('Google login error', error);
    }
  };

  const handleLoginFailure = () => {
    console.error('Google login failed');
  };

  const loginGoogle = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginFailure,
    flow: "auth-code"
  });

  return (
    <>
      {onGoogleClick && (
          <ButtonBase
          onClick={loginGoogle}
          className={{
            button:
              "flex items-center justify-center gap-x-2.5 rounded-full border border-tep_gray-700/20 px-8 py-4 text-sm font-bold transition-colors hover:border-black",
          }}
        >
          <FcGoogle className={"size-4"} />
          <span>{staticData.auth.socialLogin.text1}</span>
        </ButtonBase>
      )}
      {onFBClick && (
        <ButtonBase
          onClick={() => onFBClick()}
          className={{
            button:
              "group flex items-center justify-center gap-x-2.5 rounded-full bg-[#3B5998] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#496bb5]",
          }}
        >
          <FaFacebookF className={"size-4"} />
          <span>{staticData.auth.socialLogin.text2}</span>
        </ButtonBase>
      )}
    </>
  );
}
