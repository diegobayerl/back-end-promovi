import { inject, injectable } from "tsyringe";
import { ICompanyRepository } from "../../repositories/iCompanysRepository";
import { AppError } from "../../../../shared/errors/AppErrors";

interface iRequest {
    name: string;
    cnpj: string;
    uf: string;
    city: string;
    neighborhood: string;
    road: string;
    number: string;
    cep: string;
}

@injectable()
class CreateCompanyUseCase {
    constructor(
        @inject("CompanysRepository")
        private companysReporitory: ICompanyRepository) {};

    async execute({name, cnpj, uf, city, neighborhood, road, number, cep}: iRequest): Promise<void> {
    const companyAlreadyExists = await this.companysReporitory.findByCnpj(cnpj);
    
    if(companyAlreadyExists) {
        throw new AppError('Company already exists');
    }
    this.companysReporitory.create({
        name, 
        cnpj, 
        uf, 
        city, 
        neighborhood, 
        road, 
        number, 
        cep,
    })
    }
};

export { CreateCompanyUseCase };