import { Employees } from "../infra/typeorm/entities/employees";

interface iEmployeeDTO {
    user_id: string;
    company_id: string;
}

interface IEmployeesRepository {
    create({company_id, user_id} : iEmployeeDTO): Promise<void>;
    list(user_id: string): Promise<Employees>;
}

export {IEmployeesRepository, iEmployeeDTO}