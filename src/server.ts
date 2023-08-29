import express from 'express';

import './database';
import './shared/container';

import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

//docker build -t rentx .
//docker run -p 3333:3333 rentx  

app.listen(3333, () => {
    console.log("Server is runneing in port: 3333")
})