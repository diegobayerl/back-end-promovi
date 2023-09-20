import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateProductUseCase } from './createProductUseCase';

class CreateProductsController {

    async handle(request: Request, response: Response) : Promise<Response> {
        const { description, category, company_id } = request.body;

        const createProductUseCase = container.resolve(CreateProductUseCase);
        
        await createProductUseCase.execute({ description, category, company_id });

        return response.status(201).send();
    };
};

export { CreateProductsController };