import { inject, injectable } from "tsyringe";
import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../../repositories/iUsersRepository";

@injectable()
class ListUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository) {};
    
    async execute(id: string): Promise<User> {
        const users = await this.usersRepository.findByID(id);

        return users;
    }
};

export { ListUserUseCase };