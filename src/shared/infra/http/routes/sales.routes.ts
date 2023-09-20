import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdminCompany } from '../middlewares/ensureAdmincompany';

import { CreateSalesController } from '../../../../modules/sales/useCases/createSales/createSalesController';
import { ListSalesController } from '../../../../modules/sales/useCases/listSales/listSalesController';
import { ListSalesCompanyController } from '../../../../modules/sales/useCases/listSalesCompany/listSalesCompanyController';
import { ListSalesUserController } from '../../../../modules/sales/useCases/listSalesUser/listSalesUserController';

const salesRouter = Router();

const createSalesController = new CreateSalesController();
const listSalesController = new ListSalesController();
const listSalesCompanyController = new ListSalesCompanyController();
const listSalesUserController = new ListSalesUserController();

salesRouter.use(ensureAuthenticated)
salesRouter.post('/', createSalesController.handle);
salesRouter.get('/', listSalesController.handle);
salesRouter.get('/company/:id', ensureAdminCompany, listSalesCompanyController.handle);
salesRouter.get('/user/:id', listSalesUserController.handle);

export { salesRouter };