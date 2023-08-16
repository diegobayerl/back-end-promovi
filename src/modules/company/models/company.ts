import { v4 as uuid } from 'uuid';

class Company {
    id?: string;
    name: string;
    cnpj: string;
    uf: string;
    city: string;
    neighborhood: string;
    road: string;
    number: number;
    cep: number;
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
};

export { Company };