import { Router } from 'express';


import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAdminCompany } from '../middlewares/ensureAdmincompany';
import { ensureUpdateUser } from '../middlewares/ensureUpdateUser';

import { CreateCompanyComtroller } from '../../../../modules/company/useCases/createCompany/CreateCompanyController';
import { ListCompanyController } from '../../../../modules/company/useCases/listCompanys/ListCompanyController';

import { CreateEmployeesComtroller } from '../../../../modules/company/useCases/createEmployee/createEmployeesController';
import { ListEmployeeController } from '../../../../modules/company/useCases/listEmployees/listEmployeeController';


const companysRouter = Router();

const createCompanyController = new CreateCompanyComtroller();
const listCompanyController = new ListCompanyController();
const createEmployeeController = new CreateEmployeesComtroller();
const listEmployeeController = new ListEmployeeController();

companysRouter.use(ensureAuthenticated)
companysRouter.post('/employee', createEmployeeController.handle)
companysRouter.get('/employee/:id', ensureAdminCompany, listEmployeeController.handle)
companysRouter.post('/', ensureAdmin, ensureUpdateUser, createCompanyController.handle)
companysRouter.get('/', ensureAdmin, listCompanyController.handle)


export { companysRouter }