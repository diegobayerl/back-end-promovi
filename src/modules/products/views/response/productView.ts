import { Products } from "../../infra/typeorm/entities/products";
export default {
    render(product: Products){
        return {
            id: product.id,
            description: product.description,
            category: product.category,
            created_at: product.created_at,
            company: {
                id: product.company.id,
                name: product.company.name,
            }
        };
    },

    renderMany(product: Products[]){
        return product.map(product => this.render(product));
    }
}