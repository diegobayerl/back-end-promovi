import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity("sales")
class Sales {

    @PrimaryColumn()
    id?: string;

    @Column()
    user_id: string;

    @Column()
    company_id: string;

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