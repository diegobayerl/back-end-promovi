import { CompanysRepository } from "../../repositories/implementations/CompanysRepositoriy";
import { CreateCompanyComtroller } from "./CreateCompanyController";
import { CreateCompanyUseCase } from "./createCompanyUseCase";

const companysrepository = CompanysRepository.getInstance();

const createCompanyUseCase = new CreateCompanyUseCase(companysrepository);

const createCompanyComtroller = new CreateCompanyComtroller(createCompanyUseCase);

export { createCompanyComtroller };