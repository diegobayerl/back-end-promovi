import { Company } from "../../models/company";
import { ICompanyRepository } from "../../repositories/iCompanysRepository";


class ListCompanyUseCase {
    constructor(private companysReporitory: ICompanyRepository) {};
    
    execute(): Company[] {
        const companys = this.companysReporitory.list();

        return companys;
    }
};

export { ListCompanyUseCase };