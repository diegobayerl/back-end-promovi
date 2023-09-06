import { inject, injectable } from "tsyringe";
import { IProductRepository } from '../../repositories/IProductsRepository';

interface iRequest {
    description: string;
    category: string;
}

@injectable()
class CreateProductUseCase {
    constructor(
        @inject("ProductsRepository")
        private ProductsReporitory: IProductRepository) {};

    async execute({description, category}: iRequest): Promise<void> {
   
    this.ProductsReporitory.create({
        description,
        category
    })
    }
};

export { CreateProductUseCase };