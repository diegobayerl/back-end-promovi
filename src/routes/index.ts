import { Router } from 'express';
import { companysRoutes } from './company.routes';

const router = Router();

router.use("/companys", companysRoutes)

export { router };