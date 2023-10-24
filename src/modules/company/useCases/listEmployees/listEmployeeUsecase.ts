import { inject, injectable } from "tsyringe";
import { IEmployeesRepository } from "../../repositories/iEmployeesRepository";
import { Employees } from "../../infra/typeorm/entities/employees";

interface IRequest {
    company_id?: string;
    user_id?: string
}

@injectable()
class ListEmployeeUseCase {
    constructor(
        @inject("EmployeesRepository")
        private employeeRepository: IEmployeesRepository) {};
    
    async execute(id: string): Promise<Employees>{

        try {
            const employee = await this.employeeRepository.list(id);
            return employee;
        } catch {
            return {} as Employees
        }
        
    }
};

export { ListEmployeeUseCase };