import { AppDataSource } from "../config/database.config";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";

export class UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async getAllUsers(): Promise<User[]> {
    return this.repository.find();
  }

  async createUser(user: Partial<User>): Promise<User> {
    return this.repository.save(user);
  }

  async getUserById(id: number): Promise<User | null> {
    return this.repository.findOne({ where: { id } });
  }
}
