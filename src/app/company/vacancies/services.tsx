import { VacancyDAOService } from "./dao-services";
import { Address, ScopeOfWork, TypeOfEmployement, TypeOfWork, Vacancy } from "./interfaces";

export class VacancyService {
    private daoService: VacancyDAOService;

    constructor() {
        this.daoService = new VacancyDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getVacancies(filters: {[key: string]: string}): Promise<Vacancy[]> {
        return await this.daoService.getVacancies(filters);
    }

    public async getFiltersValues(): Promise<{
        scope_of_work: ScopeOfWork[];
        type_of_work: TypeOfWork[];
        type_of_employment: TypeOfEmployement[];
        address: Address[];
      }> {
        return await this.daoService.getFiltersValues();
    }

    public async getVacancy(id: string): Promise<Vacancy> {
        return await this.daoService.getVacancy(id);
    }

    public async postVacancyOffer(body: FormData): Promise<boolean> {
        return await this.daoService.postVacancyOffer(body);
    }

    public async postCooperationOffer(body: Object): Promise<boolean> {
        return await this.daoService.postCooperationOffer(body);
    }
}
