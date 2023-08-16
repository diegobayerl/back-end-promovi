import { Router } from 'express';
import { createCompanyComtroller } from '../modules/company/useCases/createCompany';
import { listCompanyComtroller } from '../modules/company/useCases/listCompanys';

const companysRoutes = Router();

companysRoutes.post('/', (request, response) => {
    return createCompanyComtroller.handle(request, response);
})

companysRoutes.get('/', (request, response) => {
    return listCompanyComtroller.handle(request, response);
})

export { companysRoutes }