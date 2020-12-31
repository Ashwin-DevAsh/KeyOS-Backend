const app = require("express").Router();
const UsersController = require("../Controllers/UsersController");

var usersController = new UsersController();

app.get("/v1/getUsers", usersController.getUsers);
app.get("/v1/getUserDevices/:email", usersController.getUserDevices);

module.exports = app;
