export interface Vacancy {
    id: number;
    image: string;
    title: string;
    address: Address;
    description: string;
    about_company: string;
    scope_of_work: ScopeOfWork[];
    type_of_work: TypeOfWork[];
    type_of_employment: TypeOfEmployement[];
    tag: Tag[];
    creation_time: string;
}

export const VacancyDefault = {
    id: 0,
    image: "",
    title: "",
    address: {city: "", region: ""},
    description: "",
    about_company: "",
    scope_of_work: [],
    type_of_work: [],
    type_of_employment: [],
    tag: [],
    creation_time: "",
}

export interface Address {
    city: string;
    region: string;
}

export interface ScopeOfWork {
    name: string;
}

export interface TypeOfWork {
    name: string;
}

export interface TypeOfEmployement {
    name: string;
}

export interface Tag {
    name: string;
}