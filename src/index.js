// setup env
require("dotenv").config();
const PORT = process.env.PORT || 4000;
// membuat dan menjalankan server
const express = require("express");

const userRoutes = require("./routes/user"); // Import user routes

const middlewareLogRequest = require("./middleware/logs");
const upload = require("./middleware/multer");

const app = express();

// patterns untuk menangani permintaan
// app.method(path, handler);
// app.use("/", (req, res, next) => {
//     res.send("Selamat datang di server Express.js!");
// });  // use handler semua methods

app.use(middlewareLogRequest);
app.use(express.json()); // Gunakan middleware untuk membaca body JSON
app.use('/assets',express.static('public/images')) // public statis untuk membaca file statis

app.use("/users", userRoutes); // Gunakan user routes
app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "Upload berhasil",
    data: req.file,
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
