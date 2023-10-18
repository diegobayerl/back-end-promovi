import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListSchedulaDateUseCase } from './listSchedulaDateUseCase';

class ListSchedulaDateController {
    
    async handle(request: Request, response: Response) {
        
        const {one, two, id} = request.query;
        
        const dateOne = new Date(String(one));
        const dateTwo = new Date(String(two));

        const user = String(id)

        dateOne.setHours(0, 0, 0, 0);
        dateTwo.setHours(23, 59, 59, 999);

        const listSchedulaDUseCase = container.resolve(ListSchedulaDateUseCase);
        const all = await listSchedulaDUseCase.execute({dateOne, dateTwo, id: user});

    return response.json(all);
   };
};

export { ListSchedulaDateController };