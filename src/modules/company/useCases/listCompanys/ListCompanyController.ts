import { Request, Response } from 'express';
import { ListCompanyUseCase } from './ListCompanyUseCase';

class ListCompanyController {
    constructor(private listCompanyUseCase: ListCompanyUseCase){};
    handle(request: Request, response: Response) {
    const all = this.listCompanyUseCase.execute();

    return response.json(all)
   };
};

export { ListCompanyController };