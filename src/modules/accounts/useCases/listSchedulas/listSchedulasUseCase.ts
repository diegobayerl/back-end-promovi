import { inject, injectable } from "tsyringe";
import { ISchedulaRepository } from "../../repositories/iSchedulaRepository";
import { Schedula } from "../../infra/typeorm/entities/schedula";

@injectable()
class ListSchedulasUseCase {
    constructor(
        @inject("SchedulaRepository")
        private schedulasRepository: ISchedulaRepository) {};
    
    async execute(id: string): Promise<Schedula[]> {
        const schedulas = await this.schedulasRepository.list(id);

        return schedulas;
    }
};

export { ListSchedulasUseCase };