import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm"
import { Events } from "./event.entity"
@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number

  @Column({ unique: true })
  username: String

  @Column()
  password: String

  @Column()
  fullname: String

  @Column()
  email: String

  @Column()
  phone: String
  @Column()
  createdat: Date

  @Column()
  updatedat: Date

  @ManyToOne(() => Events, (Event) => Event.owner)
  owner: Events[]
}
