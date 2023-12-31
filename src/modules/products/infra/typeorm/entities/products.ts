import { Company } from '../../../../company/infra/typeorm/entities/company';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity("products")
class Products {

    @PrimaryColumn()
    id?: string;

    @Column()
    description: string;

    @Column()
    category: string;

    @OneToOne(() => Company)
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

export { Products };