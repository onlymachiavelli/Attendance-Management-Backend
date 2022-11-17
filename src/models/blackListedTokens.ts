import { BaseEntity, Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
class BLT extends BaseEntity {
  @PrimaryColumn()
  token: String

  @Column({ nullable: false })
  addedat: Date
}

export default BLT
/*
  create table bls(token text primary key, date date not null ) ; 
*/
