import { AppDataSource } from "./config/database.config";
import app from "./app";
import "dotenv/config";
import "reflect-metadata";


const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during database connection:", error);
  });
