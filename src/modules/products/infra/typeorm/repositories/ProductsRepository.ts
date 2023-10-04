import { IProductRepository, iProductDTO } from "../../../repositories/IProductsRepository";
import { Products } from "../entities/products";
import { Repository, getRepository } from "typeorm";

class ProductsRepository implements IProductRepository {
    private repository: Repository<Products>

    constructor() {
        this.repository = getRepository(Products)
    }
    async create({ description, category, company_id}: iProductDTO): Promise<void> {
        const product = this.repository.create({
            description,
            category,
            company_id,
        });
        //insert
        await this.repository.save(product);
    }

    async list(): Promise<Products[]> {
        const product = await this.repository.find({
            relations: ["company"]
        });

        return product;
    }

    async findByID(id: string): Promise<Products[]> {
        const product = await this.repository.find({
            company_id: id
        });

        return product;
    }

    async findByIDProduct(id: string): Promise<Products> {
        const product = await this.repository.findOne(id);
        return product;
    }

}

export { ProductsRepository };