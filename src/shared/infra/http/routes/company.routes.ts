import { Router } from 'express';


import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateCompanyComtroller } from '../../../../modules/company/useCases/createCompany/CreateCompanyController';
import { ListCompanyController } from '../../../../modules/company/useCases/listCompanys/ListCompanyController';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const companysRouter = Router();

const createCompanyController = new CreateCompanyComtroller();
const listCompanyController = new ListCompanyController();

//companysRouter.use(ensureAuthenticated, ensureAdmin)
companysRouter.post('/', createCompanyController.handle)
companysRouter.get('/', listCompanyController.handle)

export { companysRouter }