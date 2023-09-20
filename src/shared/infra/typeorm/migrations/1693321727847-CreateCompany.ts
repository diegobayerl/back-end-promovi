import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateCompany1693321727847 implements MigrationInterface {

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
                        type: "varchar",
                    },
                    {
                        name: "userAdmin",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                
            }));

        await queryRunner.createForeignKey("companys",
            new TableForeignKey({
                name: "FKCompanysUsers",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["userAdmin"],
                onDelete: "CASCADE",
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("companys","FKCompanysUsers");
        await queryRunner.dropTable("companys");
    }

}
