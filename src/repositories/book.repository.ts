import { AppDataSource } from "../config/database.config";
import { Repository } from "typeorm";
import { Book } from "../entities/book.entity";

export class BookRepository {
  private repository: Repository<Book>;

  constructor() {
    this.repository = AppDataSource.getRepository(Book);
  }

  async getAllBooks(): Promise<Book[]> {
    return this.repository.find();
  }

  async saveBook(book: Partial<Book>): Promise<Book> {
    return this.repository.save(book);
  }

  async getBookById(id: number): Promise<Book | null> {
    return this.repository.findOne({ where: { id } });
  }

}
