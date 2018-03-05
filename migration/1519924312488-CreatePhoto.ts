import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePhoto1519924312488 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "photo" (
        "id" SERIAL NOT NULL,
        "name" character varying(500) NOT NULL,
        "description" text NOT NULL,
        "filename" character varying NOT NULL,
        "views" integer NOT NULL,
        "isPublished" boolean NOT NULL,
        PRIMARY KEY("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "photo"`);
  }
}
