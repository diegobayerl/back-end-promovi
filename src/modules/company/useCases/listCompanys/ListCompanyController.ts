import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListCompanyUseCase } from './ListCompanyUseCase';

import companyView from '../../views/response/companyView'

class ListCompanyController {
    
    async handle(request: Request, response: Response) {
        const listCompanyUseCase = container.resolve(ListCompanyUseCase);
        const all = await listCompanyUseCase.execute();
        return response.json(companyView.renderMany(all))
   };
};

export { ListCompanyController };