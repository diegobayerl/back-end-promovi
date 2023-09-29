import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListUserUseCase } from './listUserUseCase';
import userView from '../../views/response/userView';

class ListUserController {
    
    async handle(request: Request, response: Response) {

        const { id } = request.params

        const listUserUseCase = container.resolve(ListUserUseCase);
        const user = await listUserUseCase.execute(id);

        return response.json(userView.render(user))
   };
};

export { ListUserController };