import {MigrationInterface, Table, QueryRunner, TableForeignKey} from "typeorm";

export class createSales1694631048349 implements MigrationInterface {

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
                        name: "amount",
                        type: "numeric",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                
            }));

        await queryRunner.createForeignKey("sales",
            new TableForeignKey({
                name: "FKSalesUsers",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
            }),
        );

        await queryRunner.createForeignKey("sales",
            new TableForeignKey({
                name: "FKSalesCompanys",
                referencedTableName: "companys",
                referencedColumnNames: ["id"],
                columnNames: ["company_id"],
            }),
        );

        await queryRunner.createForeignKey("sales",
            new TableForeignKey({
                name: "FKSalesProducts",
                referencedTableName: "products",
                referencedColumnNames: ["id"],
                columnNames: ["product_id"],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("FKSalesProducts", "sales");
        await queryRunner.dropForeignKey("FKSalesCompanys", "sales");
        await queryRunner.dropForeignKey("FKSalesUsers", "sales");
        await queryRunner.dropTable("sales");
        
        
    }

}
