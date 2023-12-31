import {Schema,model,models} from 'mongoose'

interface userModel {
  email: string,
  username: string,
  image: string,
  id?: string | number
}

const UserSchema = new Schema<userModel>({
  email:{
    type:String,
    required: [true, 'Email is required!'],
    unique: true
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image:{
    type: String
  }
})

const User = models.User || model<userModel>("User",UserSchema)
export default User