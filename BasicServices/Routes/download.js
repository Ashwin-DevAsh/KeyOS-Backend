var app = require("express").Router();
var jwt = require("jsonwebtoken");
var DownloadController = require("../Controllers/DownloadController");

var downloadController = new DownloadController();

app.get("/download", downloadController.downloadProApk);

//v1
app.get("/v1/download", downloadController.downloadProApk);

module.exports = app;
