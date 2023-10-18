import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/createUserController';
import { ListUsersController } from '../../../../modules/accounts/useCases/listUsers/listUserController';
import { ListUserController } from '../../../../modules/accounts/useCases/me/listUserController';

import { CreateSchedulaController } from '../../../../modules/accounts/useCases/createSchedula/createSchedulaController';
import { ListSchedulasController } from '../../../../modules/accounts/useCases/listSchedulas/listSchedulasController';
import { ListSchedulaController } from '../../../../modules/accounts/useCases/listSchedula/listSchedulaController';
import { UpdateSchedulaController } from '../../../../modules/accounts/useCases/updateSchedula/updateSchedulaController';
import { ListSchedulaDateController } from '../../../../modules/accounts/useCases/listSchedulaDate/listSchedulaDateController';

const usersRouter = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const listUserController = new ListUserController();

const createSchedulaController = new CreateSchedulaController();
const listSchedulasController = new ListSchedulasController();
const listSchedulaController = new ListSchedulaController();
const updateSchedulaController = new UpdateSchedulaController();

const listSchedulaDateController = new ListSchedulaDateController();

usersRouter.post('/', createUserController.handle);
usersRouter.use(ensureAuthenticated);
usersRouter.get('/schedula/date', listSchedulaDateController.handle);
usersRouter.post('/schedula', createSchedulaController.handle);
usersRouter.get('/schedulas/:id', listSchedulasController.handle);
usersRouter.get('/schedula/:id', listSchedulaController.handle);
usersRouter.put('/schedula/update/:id', updateSchedulaController.handle);
usersRouter.get('/', ensureAdmin, listUsersController.handle);
usersRouter.get('/:id', listUserController.handle);



export { usersRouter };