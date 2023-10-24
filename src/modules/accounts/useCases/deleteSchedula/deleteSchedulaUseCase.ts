import { inject, injectable } from "tsyringe";
import { ISchedulaRepository } from "../../repositories/iSchedulaRepository";


@injectable()
class DeleteSchedulaUseCase {
    constructor(
        
        @inject("SchedulaRepository")
        private schedulaRespository: ISchedulaRepository) {};
    
    async execute(id: string): Promise<void> {
        await this.schedulaRespository.delete(id);
    }
};

export { DeleteSchedulaUseCase };