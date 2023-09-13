import { Router } from 'express';
import { companysRouter } from './company.routes';
import { usersRouter } from './users.routes';
import { authenticateRouter } from './Authenticate.routes';
import { productsRoutes  } from './products.routes';
import { salesRouter } from './sales.routes';

const router = Router();

router.use('/companys', companysRouter)
router.use('/users', usersRouter);
router.use("/products", productsRoutes);
router.use("/sales", salesRouter);
router.use(authenticateRouter);


export { router };