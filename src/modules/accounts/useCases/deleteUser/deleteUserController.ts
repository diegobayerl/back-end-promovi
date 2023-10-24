import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteUserUseCase } from './deleteUserUseCase';

class DeleteUserController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
    
        const deleteUserUseCase = container.resolve(DeleteUserUseCase);
        const all = await deleteUserUseCase.execute(id);

        return response.json(all);
   };
};

export { DeleteUserController };