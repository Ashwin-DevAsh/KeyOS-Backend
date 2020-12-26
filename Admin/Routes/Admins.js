const app = require("express").Router();
const AdminController = require("../Controllers/AdminController");

var adminController = new AdminController();

app.post("/v1/adminLogin", adminController.adminLogin);

module.exports = app;
