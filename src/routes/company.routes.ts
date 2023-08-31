import { Router } from 'express';

import { CreateCompanyComtroller } from '../modules/company/useCases/createCompany/CreateCompanyController';
import { ListCompanyController } from '../modules/company/useCases/listCompanys/ListCompanyController';

const companysRoutes = Router();

const createCompanyController = new CreateCompanyComtroller();
const listCompanyController = new ListCompanyController();

companysRoutes.post('/', createCompanyController.handle)

companysRoutes.get('/', listCompanyController.handle)

export { companysRoutes }