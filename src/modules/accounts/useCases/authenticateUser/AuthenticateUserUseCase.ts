import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/iUsersRepository";

import { compare } from 'bcrypt';

import { sign } from 'jsonwebtoken';
import { AppError } from "../../../../shared/errors/AppErrors";
import { IUserTokenRepository } from "../../repositories/iUsersTokensRopository";
import auth from "../../../../config/auth";
import { IDateProvider } from "../../../../shared/container/providers/dateProvider/IDateProvider";

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
    refresh_token: string,
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository,
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUserTokenRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ){};

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);
        const { expires_in_token, secret_refresh_token, secret_token, expires_in_refresh_token, expires_refresh_token_days } = auth;

        if(!user){
            throw new AppError("Email or password incorrect!");
        }

        const passwordMath = await compare(password, user.password);

        if(!passwordMath){
            throw new AppError("Email or password incorrect!");
        }

        const token = sign({}, secret_token, {
            subject: user.id,
            expiresIn: expires_in_token,
        })

        const refresh_token = sign({ email }, secret_refresh_token, {
            subject: user.id,
            expiresIn: expires_in_refresh_token,
        })

        const refresh_token_expires_date = this.dateProvider.addDays(
            expires_refresh_token_days
          );
      

        await this.usersTokensRepository.create({
            expire_date: refresh_token_expires_date,
            refresh_token, 
            user_id: user.id,
        })

        const tokenReturn: IResponse = {
            token,
            refresh_token,
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