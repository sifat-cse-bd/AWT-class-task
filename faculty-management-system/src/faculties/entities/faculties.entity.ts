import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Faculties{
    @PrimaryColumn({ type: "varchar", length: 15 })
    id: string;

    @Column({type: "varchar"})
    name: string;

    @Column({type: "varchar"})
    expertise: string;

    @Column()
    noOfPublication: number
}