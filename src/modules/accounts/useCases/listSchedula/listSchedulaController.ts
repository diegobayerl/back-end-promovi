import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListSchedulaUseCase } from './listSchedulaUsecase';

class ListSchedulaController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;

        const listSchedulaUseCase = container.resolve(ListSchedulaUseCase);
        const all = await listSchedulaUseCase.execute(id);

        return response.json(all)
   };
};

export { ListSchedulaController };