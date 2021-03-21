var app = require("express").Router();
var DevicesController = require("../Controllers/DevicesController");

var devicesController = new DevicesController();

app.get("/v1/getAllDevices", devicesController.getAllDevices);
app.get("/v1/getDevices/:offset/:limit", devicesController.getAllDevices);
app.get("/v1/getDeviceConfig/:deviceID", devicesController.getDeviceConfig);
app.get("/v1/getRegisteredDevice", devicesController.getRegisteredDevice);

module.exports = app;
//