import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document{
  email?: string
  name?: string
  password?: string
  namePassword(): string
}

const UserSchema = new Schema({
  email: String,
  name: String,
  password: String
}, {
  timestamps: true
})

UserSchema.methods.namePassword = function (): string {
  return this.name + ' ' + this.password
}

export default model<UserInterface>('users', UserSchema)
