import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export const getUsers = async (_req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  const user = await userService.createUser(name);
  res.status(201).json(user);
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.getUserById(Number(id));
  res.status(200).json(user);
}