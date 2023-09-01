import { NextFunction, Request, Response} from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { AppError } from "../errors/AppErrors";

interface IpayLoad {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const autheHeader = request.headers.authorization;

    if(!autheHeader){
        throw new AppError("Token missing", 401);
    };

    const [, token] = autheHeader.split(" ");

    try{
        const { sub: user_id }= verify(token, "be4d103c4626e036656344c5d33e495c") as IpayLoad;

        const userRepository = new UsersRepository();
        const user = await userRepository.findByID(user_id);

        if(!user){
            throw new AppError("User does not exist", 401);
        }
        
        next();
    } catch {
        throw new AppError("Invalid token", 401);
    }
};