import { Router } from 'express';
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/createUserController';
import { ListUsersController } from '../../../../modules/accounts/useCases/listUsers/listUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';


const usersRouter = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUsersController();

usersRouter.post('/', createUserController.handle);
usersRouter.use(ensureAuthenticated, ensureAdmin);
usersRouter.get('/', listUserController.handle);

export { usersRouter };