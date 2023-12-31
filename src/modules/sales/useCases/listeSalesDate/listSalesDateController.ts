import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListSalesDateUseCase } from './listSalesDateUseCase';

import salesView from '../../views/response/salesView';

class ListSalesDateController {
    
    async handle(request: Request, response: Response) {
        
        const {one, two, id} = request.query;
        
        const dateOne = new Date(String(one));
        const dateTwo = new Date(String(two));

        const user = String(id)

        dateOne.setHours(0, 0, 0, 0);
        dateTwo.setHours(23, 59, 59, 999);

        const listSalesDUseCase = container.resolve(ListSalesDateUseCase);
        const all = await listSalesDUseCase.execute({dateOne, dateTwo, user});

    return response.json(salesView.renderMany(all))
   };
};

export { ListSalesDateController };