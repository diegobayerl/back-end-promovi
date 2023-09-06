import { AppError } from "../../../../shared/errors/AppErrors";
import { UseRepositoryInMemory } from "../../repositories/in-memory/UseRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/createUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


 
 let userRepositoryInMemory: UseRepositoryInMemory;
 let authenticateUserUseCase: AuthenticateUserUseCase;
 let createUserUseCase: CreateUserUseCase;
 
 describe("Authenticate user", () => {
    beforeEach(() =>{
        userRepositoryInMemory = new UseRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
        authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryInMemory);
    })
    it("Deve ser possível autenticar um usuário", async ()=>{
        const user = {
            name: "DIEGO", 
            username: "DIEGO_PROGRAMADOR", 
            email: "DIEGO@PROG.COM", 
            password: "SENHA"
        }

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        });

        expect(result).toHaveProperty("token")
    });

    it("Não existe usuário a ser autenticado", () => {
        
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "diego@email",
                password: "senha"
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("A senha de authenticação do usuário está errada", async () => {
        const user = {
            name: "DIEGO", 
            username: "DIEGO_PROGRAMADOR", 
            email: "DIEGO@PROG.COM", 
            password: "SENHA"
        }
        expect(async () => {
            await createUserUseCase.execute(user);
            await authenticateUserUseCase.execute({
                email: user.email,
                password: "senha_incorreta"
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("A email de authenticação do usuário está errado", async () => {
        const user = {
            name: "DIEGO", 
            username: "DIEGO_PROGRAMADOR", 
            email: "DIEGO@PROG.COM", 
            password: "SENHA"
        }
        expect(async () => {
            await createUserUseCase.execute(user);
            await authenticateUserUseCase.execute({
                email: "email@incorreto.com",
                password: user.password
            });
        }).rejects.toBeInstanceOf(AppError);
    });
 })