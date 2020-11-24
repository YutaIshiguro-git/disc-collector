import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "catalogue"})
export class DiscInfo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    artist: string;

    @Column()
    disc: string;

    @Column()
    release: number;

    @Column()
    genre: string;

    @Column()
    youtube: string;

    @Column()
    cover:string;

}
