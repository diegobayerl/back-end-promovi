import { inject, injectable } from "tsyringe";
import { ICompanyRepository } from "../../repositories/iCompanysRepository";

@injectable()
class DeleteCompanyUseCase {
    constructor(
        
        @inject("CompanysRepository")
        private companyRepository: ICompanyRepository) {};
    
    async execute(id: string): Promise<void> {
        await this.companyRepository.delete(id);
    }
};

export { DeleteCompanyUseCase };