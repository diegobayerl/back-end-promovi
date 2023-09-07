import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { IUsersRepository } from "../../repositories/iUsersRepository";

import { AppError } from "../../../../shared/errors/AppErrors";

interface IRequest {
    id: string;
}

@injectable()
class UpdateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){};
    async execute({ id }: IRequest ): Promise<void> {

        const userAlreadyExists = await this.userRepository.findByID(id);

        if(!userAlreadyExists){
            throw new AppError("User not already exists");
        }

        //update
        await this.userRepository.update(id);
    }
}

export { UpdateUserUseCase };