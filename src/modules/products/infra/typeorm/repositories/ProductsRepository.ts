import { IProductRepository, iProductDTO } from "../../../repositories/IProductsRepository";
import { Products } from "../entities/products";
import { Repository, getRepository } from "typeorm";

class ProductsRepository implements IProductRepository {
    private repository: Repository<Products>

    constructor() {
        this.repository = getRepository(Products)
    }
    async create({ description, category }: iProductDTO): Promise<void> {
        const product = this.repository.create({
            description,
            category
        });
        //insert
        await this.repository.save(product);
    }

    async list(): Promise<Products[]> {
        const product = await this.repository.find();

        return product;
    }
}

export { ProductsRepository };