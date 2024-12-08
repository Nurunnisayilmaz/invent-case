import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { AppDataSource } from "./config/database.config";
import userRoutes from "./routes/user.route";
import bookRoutes from "./routes/book.route";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/books", bookRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => {
    console.error("Error during database connection:", error);
  });

export default app;
