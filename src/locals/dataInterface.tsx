export default interface StaticData {
    backendPostfix: string;
    auth: {
        notifications: {
            registration: string;
            resetPasswordConfirm: string;
            verificationCodeSend: string;
            unautorized: string;
        }
    }
}