import { Company } from "../infra/typeorm/entities/company";

interface iCompanyDTO {
    name: string;
    cnpj: string;
    uf: string;
    city: string;
    neighborhood: string;
    road: string;
    number: string;
    cep: string;
    userAdmin: string;
}

interface ICompanyRepository {
    findByCnpj(cnpj: string): Promise<Company>;
    list(): Promise<Company[]>;
    delete(id: string): Promise<void>;
    create({name, cnpj, uf, city, neighborhood, road, number, cep, userAdmin} : iCompanyDTO): Promise<void>;
}

export {ICompanyRepository, iCompanyDTO}