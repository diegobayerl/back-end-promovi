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
        private employeesReporitory: IEmployeesRepository) {};

    async execute({company_id, user_id}: iRequest): Promise<void> {
        const companyAlreadyExists = await this.employeesReporitory.list(user_id);
        
        if(companyAlreadyExists) {
            throw new AppError('User employee already exists');
        }
        await this.employeesReporitory.create({
            company_id,
            user_id
        })
    }
};

export { CreateEmployeesUseCase };