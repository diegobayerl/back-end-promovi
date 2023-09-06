import { Company } from "../../infra/typeorm/entities/company";
import { ICompanyRepository, iCompanyDTO } from "../iCompanysRepository";

class CompanyRepositoryInMemory implements ICompanyRepository {

    companys: Company[] = [];

    async findByCnpj(cnpj: string): Promise<Company> {
        const company = this.companys.find((item) => item.cnpj === cnpj );
        return company;
    }
    async list(): Promise<Company[]> {
        const listCompany = this.companys;
        return listCompany;
    }
    async create({ name, cnpj, uf, city, neighborhood, road, number, cep }: iCompanyDTO): Promise<void> {
        const company = new Company();

        Object.assign(company, {
            name,
            cnpj,
            uf,
            city,
            neighborhood,
            road,
            number,
            cep,
        })

        this.companys.push(company);
    }

}

export { CompanyRepositoryInMemory };