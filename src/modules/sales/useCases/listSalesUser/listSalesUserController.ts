import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListSalesUserUseCase } from './listSalesUserUseCase';

import salesView from '../../views/response/salesView';

class ListSalesUserController {
    
    async handle(request: Request, response: Response) {
        const {id} = request.params

        const listSalesUseCase = container.resolve(ListSalesUserUseCase);
        const all = await listSalesUseCase.execute(id);

        return response.json(salesView.renderMany(all))
   };
};

export { ListSalesUserController };