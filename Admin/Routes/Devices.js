var app = require("express").Router();
var DevicesController = require("../Controllers/DevicesController");

var devicesController = new DevicesController();

app.post("/v1/getAllDevices", devicesController.getAllDevices);
app.post("/v1/getDeviceConfig/:deviceID", devicesController.getDeviceConfig);

module.exports = app;
