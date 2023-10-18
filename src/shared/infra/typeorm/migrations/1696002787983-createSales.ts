import {MigrationInterface, Table, QueryRunner, TableForeignKey} from "typeorm";

export class createSales1696002787983 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sales",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "company_id",
                        type: "uuid",
                    },
                    {
                        name: "product_id",
                        type: "uuid",
                    },
                    {
                        name: "schedula_id",
                        type: "uuid",
                    },
                    {
                        name: "amount",
                        type: "numeric",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],

                foreignKeys: [
                    {
                        name: "FKSalesUsers",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                    },
                    {
                        name: "FKSalesCompanys",
                        referencedTableName: "companys",
                        referencedColumnNames: ["id"],
                        columnNames: ["company_id"],
                    },
                    {
                        name: "FKSalesProducts",
                        referencedTableName: "products",
                        referencedColumnNames: ["id"],
                        columnNames: ["product_id"],
                    },
                    {
                        name: "FKSalesSchedula",
                        referencedTableName: "schedula",
                        referencedColumnNames: ["id"],
                        columnNames: ["schedula_id"],
                    }
                ]
                
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sales"); 
    }

}
