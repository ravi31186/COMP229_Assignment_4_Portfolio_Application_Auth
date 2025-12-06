import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  created: { type: Date, required: true },
  updated: { type: Date, required: true }
});

const Users = mongoose.model('Users', UsersSchema);

export default Users;
