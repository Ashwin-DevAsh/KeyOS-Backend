const PasswordController = require("../Controllers/PasswordController");

var app = require("express").Router();
var PasswordController = require("../Controllers/PasswordController");

var passwordController = new PasswordController();
var devAlertController = new DevAlertController();

app.post("/getEmailVerification", passwordController.getEmailVerification);
app.post("/sendPassword", passwordController.sendPassword);

app.post("/v1/getEmailVerification", passwordController.getEmailVerification);
app.post("/v1/sendPassword", passwordController.sendPassword);

app.post("/v1/newInstallAlert", devAlertController.newInstallAlert);
app.post("/v1/userLaunchedAlert", devAlertController.userLaunchedAlert);

module.exports = app;
