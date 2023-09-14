import { ISalesRepository, iSalesDTO } from "../../../repositories/ISalesRepository";
import { Sales } from "../entities/sales";
import { Repository, getRepository } from "typeorm";

class SalesRepository implements ISalesRepository {
    private repository: Repository<Sales>

    constructor() {
        this.repository = getRepository(Sales)
    }
    async create({ user_id, company_id, product_id, amount }: iSalesDTO): Promise<void> {
        const sales = this.repository.create({
            user_id, company_id, product_id, amount
        });
        //insert
        await this.repository.save(sales);
    }

    async list(): Promise<Sales[]> {
        const sales = await this.repository.find({
            relations: ["user", "product", "company"]
        });

        return sales;
    }
}

export { SalesRepository };