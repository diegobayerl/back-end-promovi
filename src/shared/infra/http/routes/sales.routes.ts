import { Router } from 'express';
import { CreateSalesController } from '../../../../modules/sales/useCases/createSales/createSalesController';

const salesRouter = Router();

const createSalesController = new CreateSalesController();

salesRouter.post('/', createSalesController.handle);

export { salesRouter };