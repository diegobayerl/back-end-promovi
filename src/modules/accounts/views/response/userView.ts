import { User } from "../../infra/typeorm/entities/User";

export default {
    render({id, name, email, username, created_at}: User){
        return {
            id,
            name,
            email,
            username,
            created_at,
        };
    },

    renderMany(user: User[]){
        return user.map(user => this.render(user));
    }
}