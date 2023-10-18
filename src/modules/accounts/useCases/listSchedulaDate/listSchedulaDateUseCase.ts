import { ISchedulaRepository } from "../../repositories/iSchedulaRepository";
import { Schedula } from "../../infra/typeorm/entities/schedula";
import { inject, injectable } from "tsyringe";

interface FilterDate {
    dateOne: Date;
    dateTwo: Date;
    id: string
}

@injectable()
class ListSchedulaDateUseCase {
    constructor(
        @inject("SchedulaRepository")
        private SchedulaRepository: ISchedulaRepository) {};
    
    async execute({dateOne, dateTwo, id}: FilterDate): Promise<Schedula[]> {
        const schedulas = await this.SchedulaRepository.findByDate({dateOne, dateTwo, id});
        
        return schedulas;
    }
};

export { ListSchedulaDateUseCase }