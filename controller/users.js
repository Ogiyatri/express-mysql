// pemanggilan dari model

const usersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  // koneksi database gunakan try catch untuk menangani error
  try {
    const [data] = await usersModel.getAllUsers();
    res.json({
      message: "Daftar semua pengguna",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Get All UsersServer error",
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;

  try {
    await usersModel.createNewUser(body);
    res.json({
      message: "Pengguna baru telah dibuat",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Create Users Server error",
      serverMessage: error,
    });
  }
};

const updateUser = (req, res) => {
  const { id } = req.params;

  try {
    usersModel.updateUser(id, req.body);
    res.json({
      message: "Pengguna telah diperbarui",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Update Users Server error",
      serverMessage: error,
    });
  }
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  try {
    usersModel.deleteUser(id);
    res.json({
      message: "Pengguna telah dihapus",
      id: id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete Users Server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
