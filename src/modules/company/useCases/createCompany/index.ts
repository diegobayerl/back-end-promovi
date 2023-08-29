/**
import { CompanysRepository } from "../../repositories/implementations/CompanysRepositoriy";
import { CreateCompanyComtroller } from "./CreateCompanyController";
import { CreateCompanyUseCase } from "./createCompanyUseCase";

export default (): CreateCompanyComtroller => {
    const companysrepository = new CompanysRepository()

    const createCompanyUseCase = new CreateCompanyUseCase(companysrepository);

    const createCompanyComtroller = new CreateCompanyComtroller(createCompanyUseCase);

    return createCompanyComtroller;
};
 */