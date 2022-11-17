import {
  BaseEntity,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm"
@Entity()
class Categories extends BaseEntity {
  @PrimaryColumn()
  category: String

  @Column({ nullable: false })
  description: String

  @Column({ nullable: false })
  icon: String

  @Column({ nullable: false })
  addedat: Date
}

/*

create table categories (category varchar primary key, description text not null, icon varchar not null, addedat date not null);
*/
export default Categories
