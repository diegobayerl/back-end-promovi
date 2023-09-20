import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListUsersUseCase } from './listUserUseCase';
import userView from '../../views/response/userView';

class ListUsersController {
    
    async handle(request: Request, response: Response) {
        const listUserUseCase = container.resolve(ListUsersUseCase);
    const all = await listUserUseCase.execute();

    return response.json(userView.renderMany(all))
   };
};

export { ListUsersController };