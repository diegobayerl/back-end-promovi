import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCompany1692218868376 implements MigrationInterface {

    /**
    name: string;
    cnpj: string;
    uf: string;
    city: string;
    neighborhood: string;
    road: string;
    number: number;
    cep: number;
    created_at: Date;
    */

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "companys",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "cnpj",
                        type: "varchar",
                    },
                    {
                        name: "uf",
                        type: "varchar",
                    },
                    {
                        name: "city",
                        type: "varchar",
                    },
                    {
                        name: "neighborhood",
                        type: "varchar",
                    },
                    {
                        name: "road",
                        type: "varchar",
                    },
                    {
                        name: "number",
                        type: "varchar",
                    },
                    {
                        name: "cep",
                        type: "interge",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("companys");
    }

}
