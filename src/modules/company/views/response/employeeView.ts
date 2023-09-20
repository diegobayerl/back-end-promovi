import { Employees } from "../../infra/typeorm/entities/employees";
export default {
    render(employee: Employees){
        return {
            id: employee.id,
            created_at: employee.created_at,
            company: {
                id: employee.company.id,
                name: employee.company.name,
            }
        };
    },

    renderMany(employee: Employees[]){
        return employee.map(employee => this.render(employee));
    }
}