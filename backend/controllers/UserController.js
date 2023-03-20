import UserModel from '../models/UserModel.js';

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ messege: error.messege });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const users = await UserModel.findById(req.params.id);
    res.json(users);
  } catch (error) {
    res.status(404).json({ messege: error.messege });
  }
};

export const saveUsers = async (req, res) => {
  const user = new UserModel(req.body);
  try {
    const InsertUsers = await user.save();
    res.status(201).json(InsertUsers);
  } catch (error) {
    res.status(400).json({ messege: error.messege });
  }
};

export const updateUsers = async (req, res) => {
  try {
    const InsertUsers = await UserModel.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(InsertUsers);
  } catch (error) {
    res.status(400).json({ messege: error.messege });
  }
};
export const deleteUsers = async (req, res) => {
  try {
    const InsertUsers = await UserModel.deleteOne({ _id: req.params.id });
    res.status(200).json(InsertUsers);
  } catch (error) {
    res.status(400).json({ messege: error.messege });
  }
};
