import { Company } from "../../infra/typeorm/entities/company";

export default {
    render(company: Company){
        return {
            id: company.id,
            cnpj: company.cnpj,
            uf: company.uf,
            city: company.city,
            neighborhood: company.neighborhood,
            road: company.road,
            number: company.number,
            cep: company.cep,
            created_at: company.created_at,
            user: {
                id: company.user.id,
                name: company.user.name,
                email: company.user.email,
            }
        };
    },

    renderMany(company: Company[]){
        return company.map(company => this.render(company));
    }
}