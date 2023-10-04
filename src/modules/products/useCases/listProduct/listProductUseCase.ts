import { IProductRepository } from "../../repositories/IProductsRepository";
import { Products } from "../../infra/typeorm/entities/products";
import { inject, injectable } from "tsyringe";

@injectable()
class ListProductCompanyUseCase {
    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductRepository) {};
    
    async execute(id: string): Promise<Products> {
        const products = await this.productsRepository.findByIDProduct(id);

        return products;
    }
};

export { ListProductCompanyUseCase };