import { inject, injectable } from "tsyringe";
import { IProductRepository } from '../../repositories/IProductsRepository';

interface iRequest {
    description: string;
    category: string;
    company_id: string;
}

@injectable()
class CreateProductUseCase {
    constructor(
        @inject("ProductsRepository")
        private ProductsReporitory: IProductRepository) {};

    async execute({description, category, company_id}: iRequest): Promise<void> {
   
    this.ProductsReporitory.create({
        description,
        category,
        company_id
    })
    }
};

export { CreateProductUseCase };