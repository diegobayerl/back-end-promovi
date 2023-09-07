import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UpdateUserUseCase } from './updateUserUseCase';

class UpdateUserController {

    async handle(request: Request, response: Response) : Promise<Response> {
        const { userAdmin } = request.body;

        const updateUserUseCase = container.resolve(UpdateUserUseCase);
        
        await updateUserUseCase.execute({ id: userAdmin });

        return response.status(201).send();
    };
};

export { UpdateUserController };