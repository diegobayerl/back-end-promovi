import { FilterDate, ISalesRepository, iSalesDTO } from "../../../repositories/ISalesRepository";
import { Sales } from "../entities/sales";
import { Between, Repository, getRepository } from "typeorm";

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
        const sales = await this.repository.find();

        return sales;
    }

    async findByIdCompany(company_id: string): Promise<Sales[]> {
        const sales = await this.repository.find({company_id});

        return sales;
    }

    async findByIdUser(user_id: string): Promise<Sales[]> {
        const sales = await this.repository.find({user_id});

        return sales;
    }

    async findByDate({dateOne, dateTwo}: FilterDate): Promise<Sales[]> {
        const sales = await this.repository.find({
            where: {
                created_at: Between(dateOne, dateTwo),
            }
        });

        return sales;
    }
}

export { SalesRepository };