import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFavoriteCards1636071806826 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "favoriteCards",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_favorites",
            type: "uuid",
          },
          {
            name: "favorite_cards",
            type: "uuid",
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
            name: "FKUserFavorite",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_favorites"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },

          {
            name: "FKFavoriteCards",
            referencedTableName: "cards",
            referencedColumnNames: ["id"],
            columnNames: ["favorite_cards"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("favoriteCards");
  }
}
