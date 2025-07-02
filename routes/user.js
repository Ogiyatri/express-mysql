// disini kita akan membuat routing untuk user
const express = require("express");

const UserController = require("../controller/users"); // Import UserController
const router = express.Router();

//create user
router.post("/", UserController.createNewUser);

//get all users
router.get("/", UserController.getAllUsers);

//update user
router.patch("/:id", UserController.updateUser)

//delete user
router.delete("/:id", UserController.deleteUser);

module.exports = router;