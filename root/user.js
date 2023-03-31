import userModel from "../models/user.model.js";

const user = {
  getAllUsers: () => {
    return userModel.find();
  },
  getUser: ({ id }) => {
    return userModel.findOne({ id });
  },
  createUser: ({ input }) => {
    const id = Date.now();
    const user = {
      id,
      ...input,
    };
    userModel.create(user);
    return user;
  },
  updateUser: ({ input, id }) => {
    return userModel.findOneAndUpdate(id, {
      username: input.username,
      age: input.age,
    });
  },
  deleteUser: ({ id }) => {
    return userModel.findOneAndDelete({ id });
  },
};

export default user;
