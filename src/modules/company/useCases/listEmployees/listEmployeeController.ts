import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListEmployeeUseCase } from './listEmployeeUsecase';

import employeeView from '../../views/response/employeeView'

class ListEmployeeController {
    
    async handle(request: Request, response: Response) {
        const { id } = request.params

        
        const listEmployeeUseCase = container.resolve(ListEmployeeUseCase);
        const all = await listEmployeeUseCase.execute(id);

        return response.json(employeeView.render(all))
   };
};

export { ListEmployeeController };