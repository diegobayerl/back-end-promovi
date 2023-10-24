import { inject, injectable } from "tsyringe";
import { ISalesRepository } from "../../repositories/ISalesRepository";

@injectable()
class DeleteSaleUseCase {
    constructor(
        
        @inject("SalesRepository")
        private SaleRepository: ISalesRepository) {};
    
    async execute(id: string): Promise<void> {
        await this.SaleRepository.delete(id);
    }
};

export { DeleteSaleUseCase };