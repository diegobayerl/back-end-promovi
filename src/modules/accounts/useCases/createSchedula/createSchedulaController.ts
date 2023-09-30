import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSchedulaUseCase } from './createSchedulaUseCase';

class CreateSchedulaController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { 
            name, 
            nameCompany, 
            neighborhood, 
            city,
            company_id, 
            date, 
            status, 
            user_id, 
            location_end, 
            location_init = null,
         } = request.body;

        const createSchedulaUseCase = container.resolve(CreateSchedulaUseCase);

        await createSchedulaUseCase.execute({
            name, 
            nameCompany, 
            neighborhood, 
            city,
            company_id, 
            date, 
            status, 
            user_id, 
            location_end, 
            location_init,
        });

        return response.status(201).send();
    }
}

export { CreateSchedulaController }