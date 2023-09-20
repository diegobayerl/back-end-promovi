import { IProductRepository } from "../../repositories/IProductsRepository";
import { Products } from "../../infra/typeorm/entities/products";
import { inject, injectable } from "tsyringe";

@injectable()
class ListProductsCompanyUseCase {
    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductRepository) {};
    
    async execute(id: string): Promise<Products[]> {
        const products = await this.productsRepository.findByID(id);

        return products;
    }
};

export { ListProductsCompanyUseCase };