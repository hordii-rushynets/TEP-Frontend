import { Address, ScopeOfWork, TypeOfEmployement, TypeOfWork, Vacancy, VacancyDefault } from "./interfaces";

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

    public async getFiltersValues(): Promise<{
      scope_of_work: ScopeOfWork[];
      type_of_work: TypeOfWork[];
      type_of_employment: TypeOfEmployement[];
      address: Address[];
    }> {
      try {
        const response = await fetch(`${this.apiUrl}/api/vacancy/full-data/`);
        if (!response.ok) {
            throw new Error("Failed to fetch vacancies");
          }

        const filtersValues : {
          scope_of_work: ScopeOfWork[];
          type_of_work: TypeOfWork[];
          type_of_employment: TypeOfEmployement[];
          address: Address[];
        } = await response.json();
        return filtersValues;
      } catch (error) {
        console.error('Failed to fetch vacancies:', error);
        throw error;
      }
    }

    public async getVacancy(id: string): Promise<Vacancy> {
      try {
        let vacancy = VacancyDefault;
        if (id !== undefined) {
          const response = await fetch(`${this.apiUrl}/api/vacancy/vacancies/${id}/`);
          vacancy = await response.json();
        }
        return vacancy;
      } catch (error) {
        console.error('Failed to fetch vacancies:', error);
        throw error;
      }
    }

    public async postVacancyOffer(body: FormData): Promise<boolean> {
      try {
        const response = await fetch(`${this.apiUrl}/api/vacancy/cooperation-offer/`, {
          method: "POST",
          body: body,
        });
        return response.ok;
      } catch (error) {
        console.error('Failed to fetch vacancies:', error);
        throw error;
      }
    }

    public async postCooperationOffer(body: Object): Promise<boolean> {
      try {
        const response = await fetch(`${this.apiUrl}/api/vacancy/cooperation/`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        });
        return response.ok;
      } catch (error) {
        console.error('Failed to post cooperation offer:', error);
        throw error;
      }
    }
  }
  