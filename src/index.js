// setup env
require("dotenv").config();
const PORT = process.env.PORT || 4000;
// membuat dan menjalankan server
const express = require("express");

const userRoutes = require("../routes/user"); // Import user routes

const middlewareLogRequest = require("../middleware/logs");

const app = express();

// patterns untuk menangani permintaan
// app.method(path, handler);
// app.use("/", (req, res, next) => {
//     res.send("Selamat datang di server Express.js!");
// });  // use handler semua methods

app.use(middlewareLogRequest);
app.use(express.json()); // Gunakan middleware untuk membaca body JSON

app.use('/users', userRoutes); // Gunakan user routes

app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
