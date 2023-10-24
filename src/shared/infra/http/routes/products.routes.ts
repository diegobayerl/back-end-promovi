import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAdminCompany } from '../middlewares/ensureAdmincompany';

import { CreateProductsController } from '../../../../modules/products/useCases/createProduct/createProductController';
import { ListProductsController } from '../../../../modules/products/useCases/listProducts/listProductscontroller';
import { ListProductsCompanyController } from '../../../../modules/products/useCases/listProductsCompany/listProductscontroller';
import { ListProductCompanyController } from '../../../../modules/products/useCases/listProduct/listProductcontroller';
import { DeleteProductController } from '../../../../modules/products/useCases/deleteProduct/deleteProductController';




const productsRoutes = Router();

const createProductsController = new CreateProductsController();
const listProductsController = new ListProductsController();
const listProductsCompanyController = new ListProductsCompanyController();
const listProductCompanyController = new ListProductCompanyController();
const deleteProductController = new DeleteProductController();

productsRoutes.use(ensureAuthenticated)
productsRoutes.get('/company/:id', listProductsCompanyController.handle)
productsRoutes.get('/:id', listProductCompanyController.handle)
productsRoutes.post('/', ensureAdminCompany, createProductsController.handle);
productsRoutes.get('/', ensureAdmin, listProductsController.handle)
productsRoutes.delete('/:id', ensureAdmin, deleteProductController.handle)

export { productsRoutes };