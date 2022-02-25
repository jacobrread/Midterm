import { Query } from '@nestjs/common';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddTodo1645577543426 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'todo',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
          },
          {
            name: 'content',
            type: 'text',
          },
          {
            name: 'isComplete',
            type: 'boolean',
            default: 'FALSE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('todo');
  }
}
