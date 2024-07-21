import { AccountDAOService } from "./dao-services";


export class AccountService {
    private daoService: AccountDAOService;

    constructor() {
        this.daoService = new AccountDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async passwordUpdate(old_password: string, new_password: string, repeat_password: string, repeatErrorAction: () => void, oldPasswordIncorrectAction: () => void, authContext: any): Promise<boolean> {
        if (new_password === repeat_password) {
            return await this.daoService.passwordUpdate(old_password, new_password, oldPasswordIncorrectAction, authContext);
        }
        else {
            repeatErrorAction();
            return false;
        }
    }

    public async profileUpdate(body: FormData, authContext: any): Promise<boolean> {
        return await this.daoService.profileUpdate(body, authContext);
    }

    public async emailUpdateRequest(new_email: string, authContext: any): Promise<boolean> {
        return await this.daoService.emailUpdateRequest(new_email, authContext);
    }

    public async emailUpdateConfirm(new_email: string, code: string, authContext: any): Promise<boolean> {
        return await this.daoService.emailUpdateConfirm(new_email, code, authContext);
    }

    public async profileDelete(authContext: any): Promise<Response> {
        return await this.daoService.profileDelete(authContext);
    }
}
