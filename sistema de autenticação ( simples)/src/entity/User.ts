import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column("varchar")
    name:string;
    @Column('varchar')
    email:string;
    @Column('varchar')
    password:string
}
