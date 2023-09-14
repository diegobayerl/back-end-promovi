import { container } from 'tsyringe';

import "./providers/dateProvider"

import { ICompanyRepository } from '../../modules/company/repositories/iCompanysRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/iUsersRepository';
import { CompanysRepository } from '../../modules/company/infra/typeorm/repositories/CompanysRepositoriy';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IProductRepository } from '../../modules/products/repositories/IProductsRepository';
import { ProductsRepository } from '../../modules/products/infra/typeorm/repositories/ProductsRepository';
import { ISalesRepository } from '../../modules/sales/repositories/ISalesRepository';
import { SalesRepository } from '../../modules/sales/infra/typeorm/repositories/SalesRepository';
import { UsersTokenRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersTokensRepository';
import { IUserTokenRepository } from '../../modules/accounts/repositories/iUsersTokensRopository';

container.registerSingleton<ICompanyRepository>(
    'CompanysRepository', CompanysRepository
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository', UsersRepository
);


container.registerSingleton<IProductRepository>(
    'ProductsRepository', ProductsRepository
);

container.registerSingleton<ISalesRepository>(
    'SalesRepository', SalesRepository
);

container.registerSingleton<IUserTokenRepository>(
    'UsersTokensRepository', UsersTokenRepository
);