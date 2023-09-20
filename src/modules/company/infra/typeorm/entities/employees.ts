import { User } from '../../../../../modules/accounts/infra/typeorm/entities/User';
import { Company } from './company';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity("employees")
class Employees {

    @PrimaryColumn()
    id: string;

    @OneToOne(() => User)
    @JoinColumn({name: "user_id"})
    user: User

    @Column()
    user_id: string;

    @OneToOne(() => Company, {eager: true})
    @JoinColumn({name: "company_id"})
    company: Company;

    @Column()
    company_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
};

export { Employees };