import {MigrationInterface, QueryRunner} from "typeorm";

export class changeImageUrlType1606402189680 implements MigrationInterface {
    name = 'changeImageUrlType1606402189680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "photo" ADD "imageUrl" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "photo" ADD "imageUrl" integer NOT NULL`);
    }

}
