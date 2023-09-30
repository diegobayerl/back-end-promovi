import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn, CreateDateColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity("schedula")
class Schedula {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    nameCompany: string;

    @Column()
    user_id: string;

    @Column()
    company_id: string;

    @Column()
    date: Date;

    @Column()
    status: boolean;

    @Column()
    city: string;

    @Column()
    neighborhood: string;

    @Column()
    location_init: string;

    @Column()
    location_end: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Schedula}