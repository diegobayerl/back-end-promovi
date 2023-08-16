import { ICompanyRepository } from "../../repositories/iCompanysRepository";

interface iRequest {
    name: string;
    cnpj: string;
    uf: string;
    city: string;
    neighborhood: string;
    road: string;
    number: number;
    cep: number;
}

class CreateCompanyUseCase {
    constructor(private companysReporitory: ICompanyRepository) {};

    execute({name, cnpj, uf, city, neighborhood, road, number, cep}: iRequest): void {
    const companyAlreadyExists = this.companysReporitory.findByCnpj(cnpj);
    
    if(companyAlreadyExists) {
        throw new Error('Company already exists');
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