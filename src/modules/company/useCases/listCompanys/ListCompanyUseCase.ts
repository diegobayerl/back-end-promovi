import { Company } from "../../entities/company";
import { ICompanyRepository } from "../../repositories/iCompanysRepository";


class ListCompanyUseCase {
    constructor(private companysReporitory: ICompanyRepository) {};
    
    async execute(): Promise<Company[]> {
        const companys = await this.companysReporitory.list();

        return companys;
    }
};

export { ListCompanyUseCase };