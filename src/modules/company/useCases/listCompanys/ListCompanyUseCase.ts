import { inject, injectable } from "tsyringe";
import { Company } from "../../infra/typeorm/entities/company";
import { ICompanyRepository } from "../../repositories/iCompanysRepository";

@injectable()
class ListCompanyUseCase {
    constructor(
        @inject("CompanysRepository")
        private companysReporitory: ICompanyRepository) {};
    
    async execute(): Promise<Company[]> {
        const companys = await this.companysReporitory.list();
        return companys;
    }
};

export { ListCompanyUseCase };