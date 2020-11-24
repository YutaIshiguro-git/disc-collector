import {MigrationInterface, QueryRunner} from "typeorm";

export class test1606128229744 implements MigrationInterface {
    name = 'test1606128229744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "catalogue" ("id" SERIAL NOT NULL, "artist" character varying NOT NULL, "disc" character varying NOT NULL, "release" integer NOT NULL, "genre" character varying NOT NULL, "youtube" character varying NOT NULL, "cover" character varying NOT NULL, CONSTRAINT "PK_bec0fb964fb313319998ebb7480" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "catalogue"`);
    }

}
