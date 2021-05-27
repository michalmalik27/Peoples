
export interface People{
    id: number;
    address: string;
    firstName: string;
    lastName: string;
    children: People[]; 
}

export interface Merchav{
    code: number;
    desc: string;
}

export interface Yeshuv{
    code: number;
    desc: string;
}

export interface Ezur{
    code: number;
    desc: string;
}

export interface DataResult{
    merchavim: Merchav[];
    yeshuvim: Yeshuv[];
}