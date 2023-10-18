import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createSchedula1694631048349 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "schedula",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "nameCompany",
                        type: "varchar"
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "company_id",
                        type: "uuid"
                    },
                    {
                        name: "date",
                        type: "timestamp"
                    },
                    {
                        name: "status",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "city",
                        type: "varchar"
                    },
                    {
                        name: "neighborhood",
                        type: "varchar"
                    },
                    {
                        name: "location_init",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "location_end",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKSchedulaUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "FKSchedulaCompany",
                        referencedTableName: "companys",
                        referencedColumnNames: ["id"],
                        columnNames: ["company_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("schedula");
    }

}
