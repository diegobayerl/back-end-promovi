import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdminCompany } from '../middlewares/ensureAdmincompany';
import { ensureAdmin } from '../middlewares/ensureAdmin';

import { CreateSalesController } from '../../../../modules/sales/useCases/createSales/createSalesController';
import { ListSalesController } from '../../../../modules/sales/useCases/listSales/listSalesController';

import { ListSalesCompanyController } from '../../../../modules/sales/useCases/listSalesCompany/listSalesCompanyController';

import { ListSalesUserController } from '../../../../modules/sales/useCases/listSalesUser/listSalesUserController';
import { ListSalesDateController } from '../../../../modules/sales/useCases/listeSalesDate/listSalesDateController';
import { DeleteSaleController } from '../../../../modules/sales/useCases/deleteSale/deleteSaleController';

const salesRouter = Router();

const createSalesController = new CreateSalesController();
const listSalesController = new ListSalesController();
const listSalesCompanyController = new ListSalesCompanyController();
const listSalesUserController = new ListSalesUserController();
const deleteSalesUseController = new DeleteSaleController();

const listSalesDateController = new ListSalesDateController();

salesRouter.get('/date', listSalesDateController.handle); //?one=dsdss&two=hdhdhd

salesRouter.use(ensureAuthenticated)
salesRouter.post('/', createSalesController.handle);
salesRouter.delete('/', ensureAdmin, deleteSalesUseController.handle)

salesRouter.get('/company/:id', ensureAdminCompany, listSalesCompanyController.handle);
salesRouter.get('/user/:id', listSalesUserController.handle);



salesRouter.get('/', ensureAdmin, listSalesController.handle);

export { salesRouter };