import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/iUsersRepository";

import { compare } from 'bcrypt';

import { sign } from 'jsonwebtoken';
import { AppError } from "../../../../shared/errors/AppErrors";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user : {
        name: string;
        email: string;
        id: string
    },
    token: string,
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){};

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);

        if(!user){
            throw new AppError("Email or password incorrect!");
        }

        const passwordMath = await compare(password, user.password);

        if(!passwordMath){
            throw new AppError("Email or password incorrect!");
        }

        const token = sign({}, "be4d103c4626e036656344c5d33e495c", {
            subject: user.id,
            expiresIn: "1d",
        })

        const tokenReturn: IResponse = {
            token,
            user:{
                name: user.name,
                email: user.email,
                id: user.id
            }
        }

        return tokenReturn;
    }
};

export { AuthenticateUserUseCase };