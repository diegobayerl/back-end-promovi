import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteSchedulaUseCase } from './deleteSchedulaUseCase';

class DeleteSchedulaController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
    
        const deleteSchedulaUseCase = container.resolve(DeleteSchedulaUseCase);
        const all = await deleteSchedulaUseCase.execute(id);

        return response.json(all);
   };
};

export { DeleteSchedulaController };