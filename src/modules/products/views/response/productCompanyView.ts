import { Products } from "../../infra/typeorm/entities/products";
export default {
    render(product: Products){
        return {
            id: product.id,
            description: product.description,
            category: product.category,
            created_at: product.created_at,
        };
    },

    renderMany(product: Products[]){
        return product.map(product => this.render(product));
    }
}