import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteSaleUseCase } from './deleteSaleUseCase';

class DeleteSaleController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        
        const deleteSaleUseCase = container.resolve(DeleteSaleUseCase);
        const all = await deleteSaleUseCase.execute(id);

        return response.json(all);
   };
};

export { DeleteSaleController };