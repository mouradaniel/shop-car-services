import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCars1673375229518 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cars',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'brand_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'listPrice',
            type: 'numeric',
          },
          {
            name: 'salePrice',
            type: 'numeric',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKBrandCar',
            referencedTableName: 'brands',
            referencedColumnNames: ['id'],
            columnNames: ['brand_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cars');
  }
}
