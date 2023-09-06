import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateCompanyUseCase } from './createCompanyUseCase';

class CreateCompanyComtroller {

    async handle(request: Request, response: Response) : Promise<Response> {
        const { name, cnpj, uf, city, neighborhood, road, number, cep, userAdmin} = request.body;

        const createCompanyUseCase = container.resolve(CreateCompanyUseCase);
        
        await createCompanyUseCase.execute({ name, cnpj, uf, city, neighborhood, road, number, cep, userAdmin });

        return response.status(201).send();
    };
};

export { CreateCompanyComtroller };