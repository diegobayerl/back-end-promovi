import { NextFunction, Request, Response} from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../../errors/AppErrors";
import auth from "../../../../config/auth";


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
        const { sub: user_id }= verify(token, auth.secret_token) as IpayLoad;

        request.user = {
            id: user_id
        }
        
        next();
    } catch {
        throw new AppError("Invalid token", 401);
    }
};