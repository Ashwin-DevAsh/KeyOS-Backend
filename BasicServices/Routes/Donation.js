var app = require("express").Router();
var DonationController = require("../Controllers/DonationController");

var donationController = new DonationController();

app.get("/createOrder", donationController.createOrder);

module.exports = app;
