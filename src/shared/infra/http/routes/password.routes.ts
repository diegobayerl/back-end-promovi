import { Router } from "express";

import { SendForgotPasswordMailController } from "../../../../modules/accounts/useCases/sendMail/sendMailController";
import { ResetPasswordUserController } from "../../../../modules/accounts/useCases/resetPasswordUser/resetPasswordUserController";

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetPasswordController = new ResetPasswordUserController();

passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);
passwordRoutes.post("/reset", resetPasswordController.handle);

export { passwordRoutes };