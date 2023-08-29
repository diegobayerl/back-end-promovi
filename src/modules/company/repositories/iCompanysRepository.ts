import { Company } from "../entities/company";

interface iCompanyDTO {
    name: string;
    cnpj: string;
    uf: string;
    city: string;
    neighborhood: string;
    road: string;
    number: string;
    cep: string;
}

interface ICompanyRepository {
    findByCnpj(cnpj: string): Promise<Company>;
    list(): Promise<Company[]>;
    create({name, cnpj, uf, city, neighborhood, road, number, cep} : iCompanyDTO): Promise<void>;
}

export {ICompanyRepository, iCompanyDTO}