var app = require("express").Router();
var jwt = require("jsonwebtoken");

var QrCodeController = require("../Controllers/QrCodeController");
var qrCodeController = new QrCodeController();

app.post("/setPolicyData", qrCodeController.setPolicyData);
app.get("/getPolicyData/:id", qrCodeController.getPolicyData);

app.post("/v1/setPolicyData", qrCodeController.setPolicyData);
app.get("/v1/getPolicyData/:id", qrCodeController.getPolicyData);

module.exports = app;
