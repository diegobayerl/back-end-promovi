import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteCompanyUseCase } from './deleteCpmpanyUseCase';

class DeleteCompanyController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
    
        const deleteCompanyUseCase = container.resolve(DeleteCompanyUseCase);
        const all = await deleteCompanyUseCase.execute(id);

        return response.json(all);
   };
};

export { DeleteCompanyController };