import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListSalesDateUseCase } from './listSalesDateUseCase';

import salesView from '../../views/response/salesView';

class ListSalesDateController {
    
    async handle(request: Request, response: Response) {
        
        const {one, two} = request.query;

        const dateOne = new Date(String(one));
        const dateTwo = new Date(String(two));

        dateOne.setHours(0, 0, 0, 0);
        dateTwo.setHours(23, 59, 59, 999);

        const listSalesDUseCase = container.resolve(ListSalesDateUseCase);
        const all = await listSalesDUseCase.execute({dateOne, dateTwo});

    return response.json(salesView.renderMany(all))
   };
};

export { ListSalesDateController };