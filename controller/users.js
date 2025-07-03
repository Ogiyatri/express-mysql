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
      message: "Server error",
      serverMessage: error,
    })
  }
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "Pengguna baru telah dibuat",
    data: req.body,
  });
};

const updateUser = (req, res) => {
    const { id } = req.params;
    console.log(`Memperbarui pengguna dengan ID: ${id}`);
    res.json({
        message: "Pengguna telah diperbarui",
        data: req.body,
    })
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    console.log(`Menghapus pengguna dengan ID: ${id}`);
    res.json({
        message: "Pengguna telah dihapus",
        id: id,
    });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
