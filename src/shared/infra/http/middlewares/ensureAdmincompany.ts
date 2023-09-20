import {Request, Response, NextFunction } from  'express';
import { UsersRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '../../../errors/AppErrors';

export async function ensureAdminCompany(request: Request, response: Response, next: NextFunction){
    const { id } = request.user;

    const userRepository = new UsersRepository();

    const { adminCompany } = await userRepository.findByID(id);

    if(!adminCompany){
        throw new AppError("User does not have permission", 401)
    }

    return next();

}