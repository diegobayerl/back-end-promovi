import { AppError } from "../../../../shared/errors/AppErrors";
import { CompanyRepositoryInMemory } from "../../repositories/in-memory/CompanyRepositoryInMemory";
import { CreateCompanyUseCase } from "./createCompanyUseCase"

let createCompanyUseCase: CreateCompanyUseCase;
let companyRepositoryInMemory: CompanyRepositoryInMemory;

describe("Create Company", ()=>{
    beforeEach(() => {
        companyRepositoryInMemory = new CompanyRepositoryInMemory();
        createCompanyUseCase = new CreateCompanyUseCase(companyRepositoryInMemory);
    })
    it("Deve ser capaz de criar uma nova empresa", async ()=>{
        const company = {
            name: "EMPRESA DO DIEGO", 
            cnpj: "4002 8922", 
            uf: "ES", 
            city: "SAMA CITY", 
            neighborhood: "CENTRO", 
            road: "RUA DO TEIMOSO", 
            number: "159", 
            cep: "29930-530",
            userAdmin: "adkna"
        }
        await createCompanyUseCase.execute(company);

        const companyCreated = await companyRepositoryInMemory.findByCnpj(company.cnpj);

        expect(companyCreated).toHaveProperty("id");
    });

    it("Não deve ser capaz de criar uma nova empresa com mesmo CNPJ", async ()=>{
        expect(async () => {
            const company = {
                name: "EMPRESA DO DIEGO", 
                cnpj: "4002 8922", 
                uf: "ES", 
                city: "SAMA CITY", 
                neighborhood: "CENTRO", 
                road: "RUA DO TEIMOSO", 
                number: "159", 
                cep: "29930-530",
                userAdmin: "adkna"
            }
            await createCompanyUseCase.execute(company);
            await createCompanyUseCase.execute(company);
        }).rejects.toBeInstanceOf(AppError);
    });
});