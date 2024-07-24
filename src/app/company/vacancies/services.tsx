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

    public async getTypesOfWork(): Promise<TypeOfWork[]> {
        return await this.daoService.getTypesOfWork();
    }

    public async getTypesOfEmployement(): Promise<TypeOfEmployement[]> {
        return await this.daoService.getTypesOfEmployement();
    }

    public async getScopesOfWork(): Promise<ScopeOfWork[]> {
        return await this.daoService.getScopesOfWork();
    }

    public async getAddresses(): Promise<Address[]> {
        return await this.daoService.getAddresses();
    }

    public async getVacancy(id: string): Promise<Vacancy> {
        return await this.daoService.getVacancy(id);
    }
}
