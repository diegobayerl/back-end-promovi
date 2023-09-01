import { container } from 'tsyringe';

import { ICompanyRepository } from '../../modules/company/repositories/iCompanysRepository';
import { CompanysRepository } from '../../modules/company/repositories/implementations/CompanysRepositoriy';

import { IUsersRepository } from '../../modules/accounts/repositories/iUsersRepository';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';

container.registerSingleton<ICompanyRepository>(
    'CompanysRepository', CompanysRepository
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository', UsersRepository
);