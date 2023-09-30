import { inject, injectable } from "tsyringe";
import { ISchedulaRepository } from '../../repositories/iSchedulaRepository';
import { ICreateSchedulaDTO } from '../../dtos/ICreateSchedulaDTO';

@injectable()
class CreateSchedulaUseCase {
    constructor(
        @inject("SchedulaRepository")
        private schedulaRepository: ISchedulaRepository
    ){};
    async execute({ city, company_id, date, location_end, location_init, name, nameCompany, neighborhood, status, user_id }: ICreateSchedulaDTO ): Promise<void> {

        await this.schedulaRepository.create({
            name, 
            nameCompany, 
            neighborhood, 
            city,
            company_id, 
            date, 
            status, 
            user_id, 
            location_end, 
            location_init,
        })
    }
}

export { CreateSchedulaUseCase };