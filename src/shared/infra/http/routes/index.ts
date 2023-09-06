import { Router } from 'express';
import { companysRouter } from './company.routes';
import { usersRouter } from './users.routes';
import { authenticateRouter } from './Authenticate.routes';
import { productsRoutes  } from './products.routes';
const router = Router();

router.use('/companys', companysRouter)
router.use('/users', usersRouter);
router.use("/products", productsRoutes);
router.use(authenticateRouter);


export { router };