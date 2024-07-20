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
}
