import { Products } from '../infra/typeorm/entities/products'

interface iProductDTO {
    description: string;
    category: string;
    company_id: string;
}

interface IProductRepository {
    list(): Promise<Products[]>;
    create({description, category, company_id} : iProductDTO): Promise<void>;
    findByID(id: string): Promise<Products[]>;
    findByIDProduct(id: string): Promise<Products>;
}

export {IProductRepository, iProductDTO}