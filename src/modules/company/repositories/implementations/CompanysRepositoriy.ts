import { Company } from "../../models/company";
import { ICompanyRepository, iCompanyDTO } from "../iCompanysRepository";

class CompanysRepository implements ICompanyRepository {
    private companyBD: Company[];

    private static INSTANCE: CompanysRepository;

    private constructor() {
        this.companyBD = [];
    }

    public static getInstance(): CompanysRepository {
        if(!CompanysRepository.INSTANCE){
            CompanysRepository.INSTANCE = new CompanysRepository();
        }

        return CompanysRepository.INSTANCE;
    };

    create({name, cnpj, uf, city, neighborhood, road, number, cep} : iCompanyDTO): void {
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
            created_at: new Date(),
        })
            //insert
        this.companyBD.push(company)
    }

    list(): Company[] {
        return this.companyBD;
    }

    findByCnpj(cnpj: string): Company {
        const company = this.companyBD.find(item => item.cnpj === cnpj);
        return company;
    }
}

export { CompanysRepository }