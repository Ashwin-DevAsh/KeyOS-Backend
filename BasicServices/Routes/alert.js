var app = require("express").Router();
var DevAlertController = require("../Controllers/DevAlertController");
var devAlertController = new DevAlertController();

app.post("/v1/newInstallAlert", devAlertController.newInstallAlert);
app.post("/v1/userLaunchedAlert", devAlertController.userLaunchedAlert);

module.exports = app;
