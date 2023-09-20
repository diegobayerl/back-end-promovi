import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateEmployeesUseCase } from './createEmployeesUseCase';

class CreateEmployeesComtroller {

    async handle(request: Request, response: Response) : Promise<Response> {
        const { user_id, company_id } = request.body;

        const createCompanyUseCase = container.resolve(CreateEmployeesUseCase);
        
        await createCompanyUseCase.execute({ company_id, user_id });

        return response.status(201).send();
    };
};

export { CreateEmployeesComtroller };