import { Address, ScopeOfWork, TypeOfEmployement, TypeOfWork, Vacancy } from "./interfaces";

export class VacancyDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }

    public async getVacancies(filters: {[key: string]: string}): Promise<Vacancy[]> {
      const urlParams = new URLSearchParams(filters);

      try {
        const response = await fetch(`${this.apiUrl}/api/vacancy/vacancies/?${urlParams}`);
        if (!response.ok) {
            throw new Error("Failed to fetch vacancies");
          }

        const vacancies : Vacancy[] = await response.json();
        return vacancies;
      } catch (error) {
        console.error('Failed to fetch vacancies:', error);
        throw error;
      }
    }

    public async getTypesOfWork(): Promise<TypeOfWork[]> {
      try {
        const response = await fetch(`${this.apiUrl}/api/vacancy/type-of-work/`);
        if (!response.ok) {
            throw new Error("Failed to fetch vacancies");
          }

        const typesOfWork : TypeOfWork[] = await response.json();
        return typesOfWork;
      } catch (error) {
        console.error('Failed to fetch vacancies:', error);
        throw error;
      }
    }

    public async getScopesOfWork(): Promise<ScopeOfWork[]> {
      try {
        const response = await fetch(`${this.apiUrl}/api/vacancy/scope-of-work/`);
        if (!response.ok) {
            throw new Error("Failed to fetch vacancies");
          }

        const scopesOfWork : ScopeOfWork[] = await response.json();
        return scopesOfWork;
      } catch (error) {
        console.error('Failed to fetch vacancies:', error);
        throw error;
      }
    }

    public async getTypesOfEmployement(): Promise<TypeOfEmployement[]> {
      try {
        const response = await fetch(`${this.apiUrl}/api/vacancy/type-of-employment/`);
        if (!response.ok) {
            throw new Error("Failed to fetch vacancies");
          }

        const typesOfEmployement : TypeOfEmployement[] = await response.json();
        return typesOfEmployement;
      } catch (error) {
        console.error('Failed to fetch vacancies:', error);
        throw error;
      }
    }

    public async getAddresses(): Promise<Address[]> {
      try {
        const response = await fetch(`${this.apiUrl}/api/vacancy/address/`);
        if (!response.ok) {
            throw new Error("Failed to fetch vacancies");
          }

        const addresses : Address[] = await response.json();
        return addresses;
      } catch (error) {
        console.error('Failed to fetch vacancies:', error);
        throw error;
      }
    }

    public async getVacancy(id: string): Promise<Vacancy> {
      try {
        const response = await fetch(`${this.apiUrl}/api/vacancy/vacancies/${id}/`);
        if (!response.ok) {
            throw new Error("Failed to fetch vacancies");
          }

        const vacancies : Vacancy = await response.json();
        return vacancies;
      } catch (error) {
        console.error('Failed to fetch vacancies:', error);
        throw error;
      }
    }

    
  }
  