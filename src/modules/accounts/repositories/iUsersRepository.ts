import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>
    findByID(id: string): Promise<User>;
    update(id: string): Promise<void>;
    delete(id: string): Promise<void>;
    list(): Promise<User[]>;
}

export { IUsersRepository }