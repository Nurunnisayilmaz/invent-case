import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";
import { Book } from "../entities/book.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST || "localhost",
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME || "postgres",
  password: process.env.DATABASE_PASSWORD || "123456",
  database: process.env.DATABASE_NAME || "library_management",
  synchronize: false,
  logging: false,
  entities: [User, Book],
});
