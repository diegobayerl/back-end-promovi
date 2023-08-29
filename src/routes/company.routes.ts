import { Router } from 'express';

import { CreateCompanyComtroller } from '../modules/company/useCases/createCompany/CreateCompanyController';
import { listCompanyComtroller } from '../modules/company/useCases/listCompanys';

const companysRoutes = Router();

const createCompanyController = new CreateCompanyComtroller();

companysRoutes.post('/', createCompanyController.handle)

companysRoutes.get('/', (request, response) => {
    return listCompanyComtroller.handle(request, response);
})

export { companysRoutes }