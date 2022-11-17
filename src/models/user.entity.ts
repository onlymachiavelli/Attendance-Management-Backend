import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm"

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number

  @Column({ unique: true })
  username: String

  @Column()
  fullname: String

  @Column()
  email: String
  @Column()
  createdat: Date

  updatedat: Date
}
