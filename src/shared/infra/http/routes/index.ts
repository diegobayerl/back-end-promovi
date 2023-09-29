import { Router } from 'express';
import { companysRouter } from './company.routes';
import { usersRouter } from './users.routes';
import { authenticateRouter } from './Authenticate.routes';
import { productsRoutes  } from './products.routes';
import { salesRouter } from './sales.routes';
import { passwordRoutes } from './password.routes';

const router = Router();

router.use('/company', companysRouter)
router.use('/user', usersRouter);
router.use("/product", productsRoutes);
router.use("/sale", salesRouter);
router.use("/password", passwordRoutes);
router.use(authenticateRouter);



export { router };