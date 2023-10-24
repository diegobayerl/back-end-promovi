import { ICreateSchedulaDTO } from '../dtos/ICreateSchedulaDTO';
import { IUpdateSchedulaDTO } from '../dtos/IUpdateSchedulaDTO';
import { Schedula } from '../infra/typeorm/entities/schedula';

interface FilterDate {
    dateOne: Date;
    dateTwo: Date;
    id: string
}

interface ISchedulaRepository {
    create(data: ICreateSchedulaDTO): Promise<void>;
    list(user_id: string): Promise<Schedula[]>;
    update(data: IUpdateSchedulaDTO): Promise<void>;
    delete(id: string): Promise<void>;
    findByID(id: string): Promise<Schedula>
    findByDate(data: FilterDate): Promise<Schedula[]>
}

export { ISchedulaRepository };