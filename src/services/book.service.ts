import { Book } from "../entities/book.entity";
import { BookRepository } from "../repositories/book.repository";
import { UserRepository } from "../repositories/user.repository";

export class BookService {
  private bookRepository: BookRepository;
  private userRepository: UserRepository;

  constructor() {
    this.bookRepository = new BookRepository();
    this.userRepository = new UserRepository();
  }

  async getAllBooks(): Promise<Book[]> {
    return this.bookRepository.getAllBooks();
  }

  async createBook(name: string, averageRating: number): Promise<Book> {
    return this.bookRepository.saveBook({ name, averageRating });
  }

  async getBookById(id: number): Promise<Book | null> {
    return this.bookRepository.getBookById(id);
  }

  async borrowBook(userId: number, bookId: number): Promise<Book | null> {
    console.log(userId, bookId);
    const book = await this.bookRepository.getBookById(bookId);
    const user = await this.userRepository.getUserById(userId);
    console.log(book, user);
    if (!book || !user) {
      return null;
    }
    if (book.borrowedBy !== null) {
      console.log("This book has already been borrowed");
    }
    book.borrowedBy = user;
    return this.bookRepository.saveBook(book);
  }

  async returnBook(userId: number, bookId: number): Promise<Book | null> {
    const book = await this.bookRepository.getBookById(bookId);
    const user = await this.userRepository.getUserById(userId);
    console.log(book, user);
    if (!book || !user) {
      return null;
    }
    if (book.borrowedBy?.id !== user.id) {
      console.log("This book was not borrowed by the provided user");
    }
    book.borrowedBy = null;
    return this.bookRepository.saveBook(book);
  }
}
