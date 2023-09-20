import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListProductsCompanyUseCase } from './listProductsUseCase';


class ListProductsCompanyController {
    
    async handle(request: Request, response: Response) {
        const {id} = request.params
        const listProductsCompanyUseCase = container.resolve(ListProductsCompanyUseCase);
        const all = await listProductsCompanyUseCase.execute(id);

    return response.json(all)
   };
};

export { ListProductsCompanyController };