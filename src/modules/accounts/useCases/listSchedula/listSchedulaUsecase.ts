import { inject, injectable } from "tsyringe";
import { ISchedulaRepository } from "../../repositories/iSchedulaRepository";
import { Schedula } from "../../infra/typeorm/entities/schedula";

@injectable()
class ListSchedulaUseCase {
    constructor(
        @inject("SchedulaRepository")
        private schedulasRepository: ISchedulaRepository) {};
    
    async execute(id: string): Promise<Schedula> {
        const schedulas = await this.schedulasRepository.findByID(id);

        return schedulas;
    }
};

export { ListSchedulaUseCase };