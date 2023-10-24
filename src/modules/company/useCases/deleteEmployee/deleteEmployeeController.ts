import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteEmployeeUseCase } from './deleteEmployeeUseCase';

class DeleteEmployeeController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
    
        const deleteEmployeeUseCase = container.resolve(DeleteEmployeeUseCase);
        const all = await deleteEmployeeUseCase.execute(id);

        return response.json(all);
   };
};

export { DeleteEmployeeController };