import { ISalesRepository } from "../../../../modules/sales/repositories/ISalesRepository";
import { Sales } from "../../../../modules/sales/infra/typeorm/entities/sales";
import { inject, injectable } from "tsyringe";

interface FilterDate {
    dateOne: Date;
    dateTwo: Date;
}

@injectable()
class ListSalesDateUseCase {
    constructor(
        @inject("SalesRepository")
        private SalesRepository: ISalesRepository) {};
    
    async execute({dateOne, dateTwo}: FilterDate): Promise<Sales[]> {
        const sales = await this.SalesRepository.findByDate({dateOne, dateTwo});
        
        return sales;
    }
};

export { ListSalesDateUseCase };