import { container } from 'tsyringe';

import { ICompanyRepository } from '../../modules/company/repositories/iCompanysRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/iUsersRepository';
import { CompanysRepository } from '../../modules/company/infra/typeorm/repositories/CompanysRepositoriy';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IProductRepository } from '../../modules/products/repositories/IProductsRepository';
import { ProductsRepository } from '../../modules/products/infra/typeorm/repositories/ProductsRepository';

container.registerSingleton<ICompanyRepository>(
    'CompanysRepository', CompanysRepository
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository', UsersRepository
);


container.registerSingleton<IProductRepository>(
    'ProductsRepository', ProductsRepository
);