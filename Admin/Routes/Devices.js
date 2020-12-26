var app = require("express").Router();
var DevicesController = require("../Controllers/DevicesController");

var devicesController = new DevicesController();

app.get("/v1/getAllDevices", devicesController.getAllDevices);
app.get("/v1/getDeviceConfig/:deviceID", devicesController.getDeviceConfig);

module.exports = app;