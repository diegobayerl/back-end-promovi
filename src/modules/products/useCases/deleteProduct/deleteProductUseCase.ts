import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../repositories/IProductsRepository";

@injectable()
class DeleteProductUseCase {
    constructor(
        
        @inject("ProductsRepository")
        private productRepository: IProductRepository) {};
    
    async execute(id: string): Promise<void> {
        await this.productRepository.delete(id);
    }
};

export { DeleteProductUseCase };