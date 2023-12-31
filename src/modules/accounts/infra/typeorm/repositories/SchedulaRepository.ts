import { Between, Repository, getRepository } from "typeorm";
import { ISchedulaRepository } from '../../../repositories/iSchedulaRepository';
import { ICreateSchedulaDTO } from '../../../dtos/ICreateSchedulaDTO';
import { Schedula } from '../entities/schedula';
import { IUpdateSchedulaDTO } from "../../../dtos/IUpdateSchedulaDTO";

interface FilterDate {
    dateOne: Date;
    dateTwo: Date;
    id: string
}


class SchedulaRepository implements ISchedulaRepository {

    private repository: Repository<Schedula>

    constructor(){
        this.repository = getRepository(Schedula);
    }
    
    async create({ city, company_id, date, name, nameCompany, neighborhood, status, user_id, location_end, location_init }: ICreateSchedulaDTO): Promise<void> {
        const schedula = this.repository.create({
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
        });

        await this.repository.save(schedula);
    }

    async list(user_id: string): Promise<Schedula[]> {
        const schedula = await this.repository.find({user_id});

        return schedula;
    }

    async findByID(id: string): Promise<Schedula> {
        const schedula = await this.repository.findOne(id);
        return schedula;
    }

    async update({id, location_end, location_init}: IUpdateSchedulaDTO): Promise<void> {
        await this.repository.update(id, {
            location_end,
            location_init,
            status: !!location_end,
        })
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async findByDate({dateOne, dateTwo, id}: FilterDate): Promise<Schedula[]> {
        const schedulas = await this.repository.find({
            where: {
                user_id: id,
                date: Between(dateOne, dateTwo),
            }
        });

        return schedulas;
    }

};

export { SchedulaRepository }