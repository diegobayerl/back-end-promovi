import { User } from '../../../../../modules/accounts/infra/typeorm/entities/User';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity("companys")
class Company {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    cnpj: string;

    @Column()
    uf: string;

    @Column()
    city: string;

    @Column()
    neighborhood: string;

    @Column()
    road: string;

    @Column()
    number: string;

    @Column()
    cep: string;

    @OneToOne(() => User, {eager: true})
    @JoinColumn({name: "userAdmin"})
    user: User

    @Column()
    userAdmin: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
};

export { Company };