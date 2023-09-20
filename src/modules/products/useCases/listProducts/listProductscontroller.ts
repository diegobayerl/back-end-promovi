import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListProductsUseCase } from './listProductsUseCase';
import productView from '../../views/response/productView'

class ListProductsController {
    
    async handle(request: Request, response: Response) {
        const listProductsUseCase = container.resolve(ListProductsUseCase);
        const all = await listProductsUseCase.execute();

        return response.json(productView.renderMany(all))
   };
};

export { ListProductsController };