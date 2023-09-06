import { Products } from '../infra/typeorm/entities/products'

interface iProductDTO {
    description: string;
    category: string;
}

interface IProductRepository {
    list(): Promise<Products[]>;
    create({description, category} : iProductDTO): Promise<void>;
}

export {IProductRepository, iProductDTO}