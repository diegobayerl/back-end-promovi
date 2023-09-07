import { Router } from 'express';


import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { CreateCompanyComtroller } from '../../../../modules/company/useCases/createCompany/CreateCompanyController';
import { ListCompanyController } from '../../../../modules/company/useCases/listCompanys/ListCompanyController';
import { UpdateUserController } from '../../../../modules/accounts/useCases/updateAdmin/updateUserController'

const companysRouter = Router();

const createCompanyController = new CreateCompanyComtroller();
const listCompanyController = new ListCompanyController();
const updateUserAdmin = new UpdateUserController();

companysRouter.use(ensureAuthenticated, ensureAdmin)
companysRouter.post('/', updateUserAdmin.handle, createCompanyController.handle)
companysRouter.get('/', listCompanyController.handle)

export { companysRouter }