import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { IUsersRepository } from "../../repositories/iUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { AppError } from "../../../../shared/errors/AppErrors";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){};
    async execute({ name, username, email, password, company_id }: ICreateUserDTO ): Promise<void> {

        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if(userAlreadyExists){
            throw new AppError("User already exists");
        }

        const passwordHash = await hash(password, 8)

        await this.userRepository.create({
            name, 
            username, 
            email, 
            password: passwordHash,
            company_id,
        })
    }
}

export { CreateUserUseCase };