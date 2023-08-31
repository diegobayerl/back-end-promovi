import { container } from 'tsyringe';

import { ICompanyRepository } from '../../modules/company/repositories/iCompanysRepository';
import { CompanysRepository } from '../../modules/company/repositories/implementations/CompanysRepositoriy';

container.registerSingleton<ICompanyRepository>(
    'CompanysRepository', CompanysRepository
)