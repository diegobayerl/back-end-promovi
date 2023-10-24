import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteProductUseCase } from './deleteProductUseCase';

class DeleteProductController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
    
        const deleteProductUseCase = container.resolve(DeleteProductUseCase);
        const all = await deleteProductUseCase.execute(id);

        return response.json(all);
   };
};

export { DeleteProductController };