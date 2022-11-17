import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm"

import { Users } from "./user.entity"
@Entity()
export class Events extends BaseEntity {
  @PrimaryGeneratedColumn()
  eventid: Number

  @Column()
  title: String

  @Column()
  description: String

  @Column()
  createdat: Date

  @Column()
  updatedat: Date

  @Column()
  startat: Date

  @Column()
  endat: Date

  @ManyToOne(() => Users, (User) => User.id)
  owner: Users
}

