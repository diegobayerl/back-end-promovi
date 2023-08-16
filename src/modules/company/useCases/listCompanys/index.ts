import { CompanysRepository } from "../../repositories/implementations/CompanysRepositoriy";
import { ListCompanyController } from "./ListCompanyController";
import { ListCompanyUseCase } from "./ListCompanyUseCase";

const companysrepository = CompanysRepository.getInstance();

const listCompanyUseCase = new ListCompanyUseCase(companysrepository);

const listCompanyComtroller = new ListCompanyController(listCompanyUseCase);

export { listCompanyComtroller };