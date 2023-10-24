import { inject, injectable } from "tsyringe";
import { IEmployeesRepository } from "../../repositories/iEmployeesRepository";

@injectable()
class DeleteEmployeeUseCase {
    constructor(
        
        @inject("EmployeesRepository")
        private employeeRepository: IEmployeesRepository) {};
    
    async execute(id: string): Promise<void> {
        await this.employeeRepository.delete(id);
    }
};

export { DeleteEmployeeUseCase };