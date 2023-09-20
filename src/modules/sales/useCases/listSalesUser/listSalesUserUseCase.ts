import { ISalesRepository } from "../../../../modules/sales/repositories/ISalesRepository";
import { Sales } from "../../../../modules/sales/infra/typeorm/entities/sales";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSalesUserUseCase {
    constructor(
        @inject("SalesRepository")
        private SalesRepository: ISalesRepository) {};
    
    async execute(id: string): Promise<Sales[]> {
        const sales = await this.SalesRepository.findByIdUser(id);
        
        return sales;
    }
};

export { ListSalesUserUseCase };