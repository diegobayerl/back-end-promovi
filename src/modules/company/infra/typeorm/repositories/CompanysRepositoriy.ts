import { getRepository, Repository } from "typeorm";

import { Company } from "../entities/company";
import { iCompanyDTO, ICompanyRepository } from "../../../../../modules/company/repositories/iCompanysRepository";

class CompanysRepository implements ICompanyRepository {

    private repository: Repository<Company>

    constructor() {
        this.repository = getRepository(Company)
    }

    async create({name, cnpj, uf, city, neighborhood, road, number, cep, userAdmin} : iCompanyDTO): Promise<void> {

        const company = this.repository.create({
            name,
            cnpj,
            uf,
            city,
            neighborhood,
            road,
            number,
            cep,
            userAdmin
        });
        //insert
        await this.repository.save(company);
    }

    async list(): Promise<Company[]> {
        const company = await this.repository.find({
                relations:["user"]
        });

        return company;
    }

    async findByCnpj(cnpj: string): Promise<Company> {
        const company = await this.repository.findOne({cnpj})
        return company;
    }
}

export { CompanysRepository }