import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1700157220704 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL,"email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_3333333333333333" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
