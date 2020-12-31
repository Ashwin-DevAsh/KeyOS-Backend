const app = require("express").Router();
const UsersController = require("../Controllers/UsersController");

var usersController = new UsersController();

app.post("/v1/adminLogin", usersController.getUsers);

module.exports = app;
