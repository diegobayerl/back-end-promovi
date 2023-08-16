import { Request, Response } from 'express'
import { CreateCompanyUseCase } from './createCompanyUseCase';

class CreateCompanyComtroller {
    constructor(private createCompanyUseCase: CreateCompanyUseCase){};

    handle(request: Request, response: Response) {
        const { name, cnpj, uf, city, neighborhood, road, number, cep, } = request.body;
    
        this.createCompanyUseCase.execute({ name, cnpj, uf, city, neighborhood, road, number, cep });

        return response.status(201).send();
    };
};

export { CreateCompanyComtroller };