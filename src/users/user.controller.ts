import { Request, Response } from 'express'
import { UserService } from './user.model'

const userService = new UserService()

export const getUserController = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers()
  res.json(users)
}

export const createUserController = async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body.user)
  res.json(user)
}
