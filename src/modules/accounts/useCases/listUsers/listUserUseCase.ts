import { inject, injectable } from "tsyringe";
import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../../repositories/iUsersRepository";

@injectable()
class ListUsersUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository) {};
    
    async execute(): Promise<User[]> {
        const users = await this.usersRepository.list();

        return users;
    }
};

export { ListUsersUseCase };