import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { ButtonBase } from "common/ui";
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin, CodeResponse } from '@react-oauth/google';
import { useAuth } from "contexts/AuthContext";
import { useAuthNotificationContext } from "contexts/AuthNotificationContext";
import { useRouter } from "next/navigation";

export type SocialLoginProps = {
  onGoogleClick?: () => void;
  onFBClick?: () => void;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export function SocialLogin({ onFBClick, onGoogleClick }: SocialLoginProps) {
  const { setIsOpen, setTitle } = useAuthNotificationContext();
  const { login } = useAuth();
  
  const router = useRouter();

  const handleLoginSuccess = async (codeResponse: Omit<CodeResponse, "error" | "error_description" | "error_uri">) => {
    try {
      const credential = codeResponse.code;
      fetch(`${apiUrl}/api/account/auth/google/`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: credential,
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
    flow: 'auth-code',
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
          <span>Продовжити з Google</span>
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
          <span>Продовжити з Facebook</span>
        </ButtonBase>
      )}
    </>
  );
}
