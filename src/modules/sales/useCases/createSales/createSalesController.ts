import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateSalesUseCase } from './createSalesUseCase';

class CreateSalesController {

    async handle(request: Request, response: Response) : Promise<Response> {
        const { 
            user_id, 
            company_id, 
            product_id,
            schedula_id,
            amount 
        } = request.body;

        const createSalesController = container.resolve(CreateSalesUseCase);
        
        await createSalesController.execute({ 
            user_id, 
            company_id, 
            product_id,
            schedula_id,
            amount 
         });

        return response.status(201).send();
    };
};

export { CreateSalesController };