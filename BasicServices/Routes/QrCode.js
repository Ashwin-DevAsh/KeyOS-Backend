var app = require("express").Router();
var QrCodeController = require("../Controllers/QrCodeController");
var qrCodeController = new QrCodeController();

app.post("/setPolicyData", qrCodeController.setPolicyData);
app.get("/getPolicyData/:id", qrCodeController.getPolicyData);

app.post("/v1/setPolicyData", qrCodeController.setPolicyData);
app.get("/v1/getPolicyData/:id", qrCodeController.getPolicyData);

app.post("/v2/setPolicyData", qrCodeController.setPolicyDataV2);
app.get("/v2/getPolicyData/:id", qrCodeController.getPolicyDataV2);

module.exports = app;
