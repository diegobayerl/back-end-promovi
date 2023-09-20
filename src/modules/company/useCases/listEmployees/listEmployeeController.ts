import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListEmployeeUseCase } from './listEmployeeUsecase';

class ListEmployeeController {
    
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const listEmployeeUseCase = container.resolve(ListEmployeeUseCase);
    const all = await listEmployeeUseCase.execute(id);

    return response.json(all)
   };
};

export { ListEmployeeController };