import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../iUsersRepository";


class UseRepositoryInMemory implements IUsersRepository {
    users: User[] = [];

    async create({name, username, email, password}: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            name, 
            username, 
            email, 
            password,
        })

        this.users.push(user);
    }
    async findByEmail(email: string): Promise<User> {
        const user = this.users.find((item) => item.email === email );
        return user;
    }
    async findByID(id: string): Promise<User> {
        const user = this.users.find((item) => item.id === id );
        return user;
    }

}

export { UseRepositoryInMemory };