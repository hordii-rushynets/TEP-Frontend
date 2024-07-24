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