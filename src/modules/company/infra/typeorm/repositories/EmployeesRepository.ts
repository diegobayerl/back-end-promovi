import { getRepository, Repository } from "typeorm";
import { Employees } from "../entities/employees";
import { IEmployeesRepository, iEmployeeDTO } from "../../../repositories/iEmployeesRepository";

class EmployeesRepository implements IEmployeesRepository {

    private repository: Repository<Employees>

    constructor() {
        this.repository = getRepository(Employees)
    }

    async create({company_id, user_id} : iEmployeeDTO): Promise<void> {
        const employee = this.repository.create({
            company_id,
            user_id
        });

        await this.repository.save(employee);
    }

    async list(user_id: string): Promise<Employees[]> {
        const employees = await this.repository.find({user_id});
        return employees;
    }
}

export { EmployeesRepository }