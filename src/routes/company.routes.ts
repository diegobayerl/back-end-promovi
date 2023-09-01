import { Router } from 'express';

import { CreateCompanyComtroller } from '../modules/company/useCases/createCompany/CreateCompanyController';
import { ListCompanyController } from '../modules/company/useCases/listCompanys/ListCompanyController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const companysRouter = Router();

const createCompanyController = new CreateCompanyComtroller();
const listCompanyController = new ListCompanyController();

companysRouter.use(ensureAuthenticated)
companysRouter.post('/', createCompanyController.handle)
companysRouter.get('/', listCompanyController.handle)

export { companysRouter }