import { Router } from 'express';
import { CreateSalesController } from '../../../../modules/sales/useCases/createSales/createSalesController';
import { ListSalesController } from '../../../../modules/sales/useCases/listSales/listSalesController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const salesRouter = Router();

const createSalesController = new CreateSalesController();
const listSalesController = new ListSalesController();

salesRouter.use(ensureAuthenticated)
salesRouter.post('/', createSalesController.handle);
salesRouter.get('/', listSalesController.handle);

export { salesRouter };