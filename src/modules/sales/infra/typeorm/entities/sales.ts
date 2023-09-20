import { User } from '../../../../accounts/infra/typeorm/entities/User';
import { Company } from '../../../../company/infra/typeorm/entities/company';
import { Products } from '../../../../products/infra/typeorm/entities/products';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity("sales")
class Sales {

    @PrimaryColumn()
    id?: string;

    @OneToOne(() => User, { eager: true })
    @JoinColumn({name: "user_id"})
    user: User;

    @Column()
    user_id: string;
    
    @OneToOne(() => Company, { eager: true })
    @JoinColumn({name: "company_id"})
    company: Company;

    @Column()
    company_id: string;

    @OneToOne(() => Products, { eager: true })
    @JoinColumn({name: "product_id"})
    product: Products;

    @Column()
    product_id: string;

    @Column()
    amount: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
};

export { Sales };