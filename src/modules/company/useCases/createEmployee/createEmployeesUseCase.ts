import { inject, injectable } from "tsyringe";
import { IEmployeesRepository } from "../../repositories/iEmployeesRepository"; 
import { AppError } from "../../../../shared/errors/AppErrors";

interface iRequest {
    user_id: string;
    company_id: string;
}

@injectable()
class CreateEmployeesUseCase {
    constructor(
        @inject("EmployeesRepository")
        private EmployeesReporitory: IEmployeesRepository) {};

    async execute({company_id, user_id}: iRequest): Promise<void> {
    
        this.EmployeesReporitory.create({
            company_id,
            user_id
        })
    }
};

export { CreateEmployeesUseCase };