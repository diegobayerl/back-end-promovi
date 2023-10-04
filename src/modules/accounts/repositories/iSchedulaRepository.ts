import { ICreateSchedulaDTO } from '../dtos/ICreateSchedulaDTO';
import { IUpdateSchedulaDTO } from '../dtos/IUpdateSchedulaDTO';
import { Schedula } from '../infra/typeorm/entities/schedula';

interface ISchedulaRepository {
    create(data: ICreateSchedulaDTO): Promise<void>;
    list(user_id: string): Promise<Schedula[]>;
    update(data: IUpdateSchedulaDTO): Promise<void>;
    findByID(id: string): Promise<Schedula>
}

export { ISchedulaRepository };