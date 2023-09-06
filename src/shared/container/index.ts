import { container } from 'tsyringe';

import { ICompanyRepository } from '../../modules/company/repositories/iCompanysRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/iUsersRepository';
import { CompanysRepository } from '../../modules/company/infra/typeorm/repositories/CompanysRepositoriy';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<ICompanyRepository>(
    'CompanysRepository', CompanysRepository
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository', UsersRepository
);