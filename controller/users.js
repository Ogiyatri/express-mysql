const getAllUsers = (req, res) => {
    const data = {
        id: "1",
        nama: "Malakiano",
        umur: 20,
        pekerjaan: "Programmer",
    }
  res.json({
    message: "Daftar semua pengguna",
    data: data,
  });
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
