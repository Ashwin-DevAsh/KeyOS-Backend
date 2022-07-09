var app = require("express").Router();
const PasswordController = require("../Controllers/PasswordController");

var passwordController = new PasswordController();

app.post("/getEmailVerification", passwordController.getEmailVerification);
app.post("/sendPassword", passwordController.sendPassword);

app.post("/v1/getEmailVerification", passwordController.getEmailVerification);
// app.post("/v1/sendPassword", passwordController.sendPassword);

module.exports = app;
