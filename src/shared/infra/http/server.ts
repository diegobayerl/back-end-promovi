import 'reflect-metadata';
import 'dotenv/config';
import createConnection from '../typeorm';
import '../../container';
import express, { NextFunction, Request, Response } from 'express';

import rateLimiter from './middlewares/rateLimiter';

import cors from 'cors'; 

import 'express-async-errors';

import { AppError } from '../../errors/AppErrors';
import { router } from './routes';

createConnection();
const app = express();

//app.use(rateLimiter);

app.use(express.json());

app.use(cors())
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({message: err.message});
    }

    return response.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`,
    })
}) 

app.listen(3333, () => {
    console.log("Server is runneing in port: 3333")
})