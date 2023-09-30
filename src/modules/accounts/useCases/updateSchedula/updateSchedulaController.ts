import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UpdateSchedulaUseCase } from './updateSchedulaUseCase';

class UpdateSchedulaController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const {location_end, location_init} = request.body;

        const updateSchedulaUseCase = container.resolve(UpdateSchedulaUseCase);
        const all = await updateSchedulaUseCase.execute({id, location_end, location_init});

        return response.json(all)
   };
};

export { UpdateSchedulaController };