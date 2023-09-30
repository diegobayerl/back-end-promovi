import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/createUserController';
import { ListUsersController } from '../../../../modules/accounts/useCases/listUsers/listUserController';
import { ListUserController } from '../../../../modules/accounts/useCases/me/listUserController';

import { CreateSchedulaController } from '../../../../modules/accounts/useCases/createSchedula/createSchedulaController';
import { ListSchedulaController } from '../../../../modules/accounts/useCases/listSchedula/listSchedulaController';
import { UpdateSchedulaController } from '../../../../modules/accounts/useCases/updateSchedula/updateSchedulaController';

const usersRouter = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const listUserController = new ListUserController();

const createSchedulaController = new CreateSchedulaController();
const listSchedulaController = new ListSchedulaController();
const updateSchedulaController = new UpdateSchedulaController();


usersRouter.post('/', createUserController.handle);
usersRouter.post('/schedula', createSchedulaController.handle);
usersRouter.get('/schedula/:id', listSchedulaController.handle);
usersRouter.put('/schedula/update/:id', updateSchedulaController.handle);
usersRouter.use(ensureAuthenticated);
usersRouter.get('/', ensureAdmin, listUsersController.handle);
usersRouter.get('/:id', listUserController.handle);



export { usersRouter };