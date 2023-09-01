import { Repository, getRepository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../iUsersRepository";
import { User } from "../../entities/User";



class UsersRepository implements IUsersRepository {

    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User);
    }

    async create({ name, username, email, password }: ICreateUserDTO): Promise<void> {
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

};

export { UsersRepository}