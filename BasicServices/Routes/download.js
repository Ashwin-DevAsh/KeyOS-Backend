var app = require("express").Router();
var jwt = require("jsonwebtoken");

app.get("/download", function (req, res) {
  const file = "../public/Apk/KeyOS.apk";
  res.download(file);
});

//v1
app.get("/v1/download", function (req, res) {
  const file = "../public/Apk/KeyOS.apk";
  res.download(file);
});

module.exports = app;
