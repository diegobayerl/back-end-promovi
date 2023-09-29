import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/createUserController';
import { ListUsersController } from '../../../../modules/accounts/useCases/listUsers/listUserController';
import { ListUserController } from '../../../../modules/accounts/useCases/me/listUserController';

const usersRouter = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

const listUserController = new ListUserController();

usersRouter.post('/', createUserController.handle);
usersRouter.use(ensureAuthenticated);
usersRouter.get('/', ensureAdmin, listUsersController.handle);
usersRouter.get('/:id', listUserController.handle);

export { usersRouter };