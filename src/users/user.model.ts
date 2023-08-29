import { model, Schema } from 'mongoose'

const usersSchema = new Schema({
  name: String
})

const UserModel = model('User', usersSchema)

export class UserService {
  async getAllUsers () {
    return await UserModel.find()
  }

  async createUser (user: string) {
    const newUser = new UserModel({ name: user })
    return newUser
  }
}

// export const getAllUsers = async () => {
//   return await UserModel.find()
// }

// export const createUser = async (user: string) => {
//   const newUser = new UserModel({ name: user })
//   return newUser
// }
