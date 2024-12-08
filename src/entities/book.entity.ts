import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("float", { default: 0 })
  averageRating: number;

  @ManyToOne(() => User, (user) => user.borrowedBooks, { nullable: true })
  borrowedBy: User;
}
