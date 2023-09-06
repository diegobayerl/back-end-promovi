import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
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

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
};

export { Company };