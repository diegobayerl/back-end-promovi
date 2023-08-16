import { Company } from "../models/company";

interface iCompanyDTO {
    name: string;
    cnpj: string;
    uf: string;
    city: string;
    neighborhood: string;
    road: string;
    number: number;
    cep: number;
}

interface ICompanyRepository {
    findByCnpj(cnpj: string): Company;
    list(): Company[];
    create({name, cnpj, uf, city, neighborhood, road, number, cep} : iCompanyDTO): void;
}

export {ICompanyRepository, iCompanyDTO}