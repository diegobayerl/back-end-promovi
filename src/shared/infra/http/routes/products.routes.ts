import { Router } from 'express';
import { CreateProductsController } from '../../../../modules/products/useCases/createProduct/createProductController';
import { ListProductsController } from '../../../../modules/products/useCases/listProducts/listProductscontroller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ListProductsCompanyController } from '../../../../modules/products/useCases/listProductsCompany/listProductscontroller';


const productsRoutes = Router();

const createProductsController = new CreateProductsController();
const listProductsController = new ListProductsController();
const listProductsCompanyController = new ListProductsCompanyController();


productsRoutes.get('/:id', listProductsCompanyController.handle)
productsRoutes.use(ensureAuthenticated)
productsRoutes.post('/', createProductsController.handle);
productsRoutes.get('/', listProductsController.handle)

export { productsRoutes };