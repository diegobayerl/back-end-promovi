import { getRepository, Repository } from "typeorm";
import { Company } from "../../entities/company";
import { ICompanyRepository, iCompanyDTO } from "../iCompanysRepository";

class CompanysRepository implements ICompanyRepository {

    private repository: Repository<Company>

    constructor() {
        this.repository = getRepository(Company)
    }

    async create({name, cnpj, uf, city, neighborhood, road, number, cep} : iCompanyDTO): Promise<void> {

        const company = this.repository.create({
            name,
            cnpj,
            uf,
            city,
            neighborhood,
            road,
            number,
            cep,
        });
        //insert
        await this.repository.save(company);
    }

    async list(): Promise<Company[]> {
        const company = await this.repository.find();

        return company;
    }

    async findByCnpj(cnpj: string): Promise<Company> {
        const company = await this.repository.findOne({cnpj})
        return company;
    }
}

export { CompanysRepository }