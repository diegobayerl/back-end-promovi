import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListSalesCompanyUseCase } from './listSalesCompanyUseCase';

import salesView from '../../views/response/salesView';

class ListSalesCompanyController {
    
    async handle(request: Request, response: Response) {
        const {id} = request.params

        const listSalesUseCase = container.resolve(ListSalesCompanyUseCase);
        const all = await listSalesUseCase.execute(id);

        return response.json(salesView.renderMany(all))
   };
};

export { ListSalesCompanyController };