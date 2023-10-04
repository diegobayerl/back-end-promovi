import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListSchedulasUseCase } from './listSchedulasUseCase';

class ListSchedulasController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;

        const listSchedulaUseCase = container.resolve(ListSchedulasUseCase);
        const all = await listSchedulaUseCase.execute(id);

        return response.json(all)
   };
};

export { ListSchedulasController };