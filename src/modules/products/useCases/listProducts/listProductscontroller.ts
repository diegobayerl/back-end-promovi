import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListProductsUseCase } from './listProductsUseCase';


class ListProductsController {
    
    async handle(request: Request, response: Response) {
        const listProductsUseCase = container.resolve(ListProductsUseCase);
        const all = await listProductsUseCase.execute();

    return response.json(all)
   };
};

export { ListProductsController };