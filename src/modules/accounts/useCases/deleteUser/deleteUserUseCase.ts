import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/iUsersRepository";

@injectable()
class DeleteUserUseCase {
    constructor(
        
        @inject("UsersRepository")
        private userRepository: IUsersRepository) {};
    
    async execute(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
};

export { DeleteUserUseCase };