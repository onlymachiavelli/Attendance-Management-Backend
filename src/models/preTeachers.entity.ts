import { BaseEntity , Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm"



@Entity()
export class Pteachers extends BaseEntity{
    @PrimaryColumn()
    code:string //teacher's matricule 
    @Column({unique:true})
    email : string
}