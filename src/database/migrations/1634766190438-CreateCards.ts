import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCards1634419897122 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cards",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_cards",
            type: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "set",
            type: "varchar",
          },
          {
            name: "condition",
            type: "varchar",
          },
          {
            name: "price",
            type: "varchar",
          },
          {
            name: "complement",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
          },
          {
            name: "updated_at",
            type: "timestamp",
          },
        ],

        foreignKeys: [
          {
            name: "FKUserCards",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_cards"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cards");
  }
}
