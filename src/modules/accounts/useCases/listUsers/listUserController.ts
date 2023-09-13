import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListUsersUseCase } from './listUserUseCase';

class ListUsersController {
    
    async handle(request: Request, response: Response) {
        const listUserUseCase = container.resolve(ListUsersUseCase);
    const all = await listUserUseCase.execute();

    return response.json(all)
   };
};

export { ListUsersController };