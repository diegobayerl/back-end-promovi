import { Sales } from '../infra/typeorm/entities/sales'

interface iSalesDTO {
    user_id: string;
    company_id: string;
    product_id: string;
    amount: number;
}

interface FilterDate {
    dateOne: Date;
    dateTwo: Date;
}

interface ISalesRepository {
    list(): Promise<Sales[]>;
    create({user_id, company_id, product_id, amount} : iSalesDTO): Promise<void>;
    findByIdCompany(company_id: string): Promise<Sales[]>;
    findByIdUser(user_id: string): Promise<Sales[]>;
    findByDate(date: FilterDate): Promise<Sales[]>;
}

export {ISalesRepository, iSalesDTO, FilterDate}