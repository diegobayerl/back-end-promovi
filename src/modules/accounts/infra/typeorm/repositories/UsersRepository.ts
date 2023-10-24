import { Repository, getRepository } from "typeorm";
import { IUsersRepository } from "../../../repositories/iUsersRepository";
import { User } from "../entities/User";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";


class UsersRepository implements IUsersRepository {

    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User);
    }
    
    async create({ name, username, email, password}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            username,
            password,
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email});

        return user;
    }
    async findByID(id: string): Promise<User> {
        const user = await this.repository.findOne(id);

        return user;
    }

    async update(id: string): Promise<void> {
        await this.repository.update(id, {
            adminCompany: true,
        })
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async list(): Promise<User[]> {
        const user = await this.repository.find();

        return user;
    }

};

export { UsersRepository}