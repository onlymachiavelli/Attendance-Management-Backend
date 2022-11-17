import { BaseEntity, Column, PrimaryColumn, Entity, OneToMany } from "typeorm"
import Posts from "./post"
enum sex {
  MALE = "male",
  FEMALE = "female",
}
@Entity()
class Users extends BaseEntity {
  @PrimaryColumn()
  username: String

  @Column({ nullable: false })
  fullname: String

  @Column({ unique: true, nullable: false })
  email: String

  @Column({ nullable: false, unique: true })
  phone: String
  @Column({ nullable: false })
  password: String

  @Column({ nullable: false, default: false })
  isverified: boolean

  @Column({ nullable: false, type: "enum", enum: sex })
  gender: sex
  @Column({ nullable: false })
  birthdate: Date

  @Column({ nullable: false })
  createdat: Date

  @Column({ nullable: false })
  updatedat: Date

  @Column()
  profilepic: String

  @OneToMany(() => Posts, (posts) => posts.postedby)
  post: Posts[]
}

export default Users
/*

create type sex as enum ('male' , 'female') ; 
create table users (username varchar primary key, fullname varchar not null, email varchar not null unique, phone varchar not null unique, isverified boolean default false, password varchar not null, gender sex not null, birthdate date not null, createdat date not null, updatedat date not null, profilepic varchar );






*/
