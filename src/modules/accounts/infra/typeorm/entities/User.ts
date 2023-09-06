import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn, CreateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import { Company } from '../../../../company/infra/typeorm/entities/company';

//dar revert na migration de users por causa dos campos idmin
@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @OneToOne(() => Company)
    @JoinColumn({name: "company_id"})
    company: Company;

    @Column()
    company_id: string;

    @Column()
    adminCompany: boolean;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {User}