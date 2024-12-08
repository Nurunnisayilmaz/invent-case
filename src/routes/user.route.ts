import { Router } from "express";
import { getUsers, createUser, getUserById } from "../controllers/user.controller";
import { borrowBook, returnBook } from "../controllers/book.controller";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.post("/:userId/borrow/:bookId", borrowBook);
router.post("/:userId/return/:bookId", returnBook);

export default router;
