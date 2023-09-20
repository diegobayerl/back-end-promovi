import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAdminCompany } from '../middlewares/ensureAdmincompany';

import { CreateProductsController } from '../../../../modules/products/useCases/createProduct/createProductController';
import { ListProductsController } from '../../../../modules/products/useCases/listProducts/listProductscontroller';
import { ListProductsCompanyController } from '../../../../modules/products/useCases/listProductsCompany/listProductscontroller';




const productsRoutes = Router();

const createProductsController = new CreateProductsController();
const listProductsController = new ListProductsController();
const listProductsCompanyController = new ListProductsCompanyController();

productsRoutes.use(ensureAuthenticated)
productsRoutes.get('/:id', listProductsCompanyController.handle)
productsRoutes.post('/', ensureAdminCompany, createProductsController.handle);
productsRoutes.get('/', ensureAdmin, listProductsController.handle)

export { productsRoutes };