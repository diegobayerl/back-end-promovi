import { Router } from 'express';
import { CreateProductsController } from '../../../../modules/products/useCases/createProduct/createProductController';
import { ListProductsController } from '../../../../modules/products/useCases/listProducts/listProductscontroller';



const productsRoutes = Router();

const createProductsController = new CreateProductsController();
const listProductsController = new ListProductsController();

productsRoutes.post('/', createProductsController.handle);
productsRoutes.get('/', listProductsController.handle)

export { productsRoutes };