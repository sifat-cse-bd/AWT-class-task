import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Faculties{
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    expertise: string;

    @Column()
    noOfPublication: number
}