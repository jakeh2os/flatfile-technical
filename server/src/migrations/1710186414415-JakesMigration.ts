import {MigrationInterface, QueryRunner} from "typeorm";

export class JakesMigration1710186414415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "cards" ADD COLUMN "description" varchar(255)`,
        )
        await queryRunner.query(
            `ALTER TABLE "cards" ADD COLUMN "assignee" varchar(255)`,
        )
        await queryRunner.query(
            `ALTER TABLE "cards" ADD COLUMN "url" varchar(255)`,
        )
    } 

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
