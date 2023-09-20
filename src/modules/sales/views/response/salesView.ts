import { Sales } from "../../infra/typeorm/entities/sales";
export default {
    render(sales: Sales){
        return {
            id: sales.id,
            created_at: sales.created_at,
            company: {
                id: sales.company.id,
                name: sales.company.name,
            },
            product: {
                id: sales.product.id,
                description: sales.product.description,
                category: sales.product.category
            },
            user: {
                id: sales.user.id,
                name: sales.user.name,
                email: sales.user.email
            }
        };
    },

    renderMany(sales: Sales[]){
        return sales.map(sales => this.render(sales));
    }
}