import { inject, injectable } from "tsyringe";
import { ISchedulaRepository } from "../../repositories/iSchedulaRepository";
import { IUpdateSchedulaDTO } from "../../dtos/IUpdateSchedulaDTO";

@injectable()
class UpdateSchedulaUseCase {
    constructor(
        @inject("SchedulaRepository")
        private schedulasRepository: ISchedulaRepository) {};
    
    async execute({id, location_end, location_init}: IUpdateSchedulaDTO): Promise<void> {
        await this.schedulasRepository.update({id, location_end, location_init});
    }
};

export { UpdateSchedulaUseCase };