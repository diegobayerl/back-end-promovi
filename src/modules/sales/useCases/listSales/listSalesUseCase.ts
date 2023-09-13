import { ISalesRepository } from "../../../../modules/sales/repositories/ISalesRepository";
import { Sales } from "../../../../modules/sales/infra/typeorm/entities/sales";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSalesUseCase {
    constructor(
        @inject("SalesRepository")
        private SalesRepository: ISalesRepository) {};
    
    async execute(): Promise<Sales[]> {
        const sales = await this.SalesRepository.list();
        
        return sales;
    }
};

export { ListSalesUseCase };