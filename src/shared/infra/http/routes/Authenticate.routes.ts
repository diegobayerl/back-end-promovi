import { Router } from 'express';
import { AuthenticateUserController } from '../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController';
import { RefreshTokenController } from '../../../../modules/accounts/useCases/refresh_token/refreshTokenController';

const authenticateRouter = Router();

const authenticateUserController = new AuthenticateUserController();
const refresh_tokenController = new RefreshTokenController();


authenticateRouter.post("/session", authenticateUserController.handle);
authenticateRouter.post("/refrash-token", refresh_tokenController.handle);

export {authenticateRouter };