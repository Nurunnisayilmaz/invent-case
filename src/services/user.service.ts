import { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";


export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }

  async createUser(name: string): Promise<User> {
    return this.userRepository.createUser({ name });
  }

  async getUserById(id: number): Promise<User | null> {
    return this.userRepository.getUserById(id);
  }
}
