import { Request, Response } from "express";
import { BookService } from "../services/book.service";

const bookService = new BookService();

export const getBooks = async (_req: Request, res: Response) => {
  const books = await bookService.getAllBooks();
  res.status(200).json(books);
};

export const createBook = async (req: Request, res: Response) => {
  const { name, averageRating } = req.body;
  const book = await bookService.createBook(name, averageRating);
  res.status(201).json(book);
};

export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await bookService.getBookById(Number(id));
  res.status(200).json(book);
};

export const borrowBook = async (req: Request, res: Response) => {
  const { bookId, userId } = req.body;
  const book = await bookService.borrowBook(userId,bookId);
  res.status(200).json(book);
};

export const returnBook = async (req: Request, res: Response) => {
  const { bookId, userId } = req.body;
  const book = await bookService.returnBook(bookId, userId);
  res.status(200).json(book);
};