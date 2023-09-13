import { Sales } from '../infra/typeorm/entities/sales'

interface iSalesDTO {
    user_id: string;
    company_id: string;
    product_id: string;
    amount: number;
}

interface ISalesRepository {
    list(): Promise<Sales[]>;
    create({user_id, company_id, product_id, amount} : iSalesDTO): Promise<void>;
}

export {ISalesRepository, iSalesDTO}