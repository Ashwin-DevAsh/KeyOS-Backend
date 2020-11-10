var app = require("express").Router();
var jwt = require("jsonwebtoken");

app.get("/download", function (req, res) {
  const file = "../public/Apk/demo.txt";
  res.download(file);
});

module.exports = app;
