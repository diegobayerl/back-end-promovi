import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListProductCompanyUseCase } from './listProductUseCase';

import productCompanyView from '../../views/response/productCompanyView'

class ListProductCompanyController {
    
    async handle(request: Request, response: Response) {
        const {id} = request.params
        const listProductsCompanyUseCase = container.resolve(ListProductCompanyUseCase);
        const all = await listProductsCompanyUseCase.execute(id);

        return response.json(productCompanyView.render(all))
   };
};

export { ListProductCompanyController };