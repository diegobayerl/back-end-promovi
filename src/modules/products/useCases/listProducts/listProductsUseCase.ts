import { IProductRepository } from "../../../../modules/products/repositories/IProductsRepository";
import { Products } from "../../../../modules/products/infra/typeorm/entities/products";
import { inject, injectable } from "tsyringe";

@injectable()
class ListProductsUseCase {
    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductRepository) {};
    
    async execute(): Promise<Products[]> {
        const products = await this.productsRepository.list();

        return products;
    }
};

export { ListProductsUseCase };