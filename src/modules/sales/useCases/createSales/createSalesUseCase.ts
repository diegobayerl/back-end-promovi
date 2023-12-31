import { inject, injectable } from "tsyringe";
import { ISalesRepository, iSalesDTO } from '../../repositories/ISalesRepository';

@injectable()
class CreateSalesUseCase {
    constructor(
        @inject("SalesRepository")
        private SalesRepository: ISalesRepository) {};

    async execute({user_id, company_id, product_id, schedula_id, amount}: iSalesDTO): Promise<void> {
   
    await this.SalesRepository.create({
        user_id, 
        company_id, 
        product_id,
        schedula_id,
        amount
    })
    }
};

export { CreateSalesUseCase };