import {
  BaseEntity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
} from "typeorm"
import Users from "./users"
import Categories from "./categories"
@Entity()
class Posts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number

  @ManyToOne(() => Users, (postedby) => postedby.username)
  postedby: Users

  @Column({ nullable: false })
  title: String

  @Column({ nullable: false, default: false })
  sold: Boolean
  @Column({ nullable: false })
  description: String
  @Column({ nullable: false })
  price: Number

  @Column({ nullable: false })
  postedat: Date

  @ManyToOne(() => Categories, (category) => category.category)
  category: Categories
}

/*

    postid 
    postedby -> username 
    title 
    description 
    price 
    postedat 
    model 
    category 


     alter table posts add constraint userRel foreign key (postedby) references users (username) ;

     create table Posts (id int primary key, postedby varchar not null, title varchar not null, sold bool not null , description text not null, price decimal, postedat date not null, category varchar not null) ;

*/
export default Posts
