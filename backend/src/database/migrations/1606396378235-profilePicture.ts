import {MigrationInterface, QueryRunner} from "typeorm";

export class profilePicture1606396378235 implements MigrationInterface {
    name = 'profilePicture1606396378235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "location" ("id" SERIAL NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "description" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "profilePicture" character varying, "locationId" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_93e37a8413a5745a9b52bc3c0c" UNIQUE ("locationId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_matchs_user" ("userId_1" integer NOT NULL, "userId_2" integer NOT NULL, CONSTRAINT "PK_dcb3f44a05bcb3152e660cf223f" PRIMARY KEY ("userId_1", "userId_2"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b5a028339cd18ef3c16ae92b8c" ON "user_matchs_user" ("userId_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_86df8b3289b67742453c104e6b" ON "user_matchs_user" ("userId_2") `);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_93e37a8413a5745a9b52bc3c0c1" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_matchs_user" ADD CONSTRAINT "FK_b5a028339cd18ef3c16ae92b8ca" FOREIGN KEY ("userId_1") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_matchs_user" ADD CONSTRAINT "FK_86df8b3289b67742453c104e6b2" FOREIGN KEY ("userId_2") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_matchs_user" DROP CONSTRAINT "FK_86df8b3289b67742453c104e6b2"`);
        await queryRunner.query(`ALTER TABLE "user_matchs_user" DROP CONSTRAINT "FK_b5a028339cd18ef3c16ae92b8ca"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_93e37a8413a5745a9b52bc3c0c1"`);
        await queryRunner.query(`DROP INDEX "IDX_86df8b3289b67742453c104e6b"`);
        await queryRunner.query(`DROP INDEX "IDX_b5a028339cd18ef3c16ae92b8c"`);
        await queryRunner.query(`DROP TABLE "user_matchs_user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "location"`);
    }

}
