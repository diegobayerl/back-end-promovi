import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListSalesUseCase } from './/listSalesUseCase';

import salesView from '../../views/response/salesView';

class ListSalesController {
    
    async handle(request: Request, response: Response) {
        const listSalesUseCase = container.resolve(ListSalesUseCase);
        const all = await listSalesUseCase.execute();

    return response.json(salesView.renderMany(all))
   };
};

export { ListSalesController };