import {Request, Response, NextFunction } from  'express';
import { UsersRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '../../../errors/AppErrors';

export async function ensureUpdateUser(request: Request, response: Response, next: NextFunction){
    const { userAdmin } = request.body;

    const userRepository = new UsersRepository();

    const user = await userRepository.findByID(userAdmin);

    if(!user){
        throw new AppError("User does not exist", 401)
    }

    await userRepository.update(userAdmin);

    return next();

}