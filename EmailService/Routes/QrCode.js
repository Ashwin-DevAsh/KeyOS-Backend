var app = require("express").Router();
var jwt = require("jsonwebtoken");

var userPolicies = {};

app.post("/setPolicyData", async (req, res) => {
  setPolicyData(req, res);
});

app.get("/getPolicyData/:id", async (req, res) => {
  getPolicyData(req, res);
});

var setPolicyData = async (req, res) => {
  var policyData = req.body["policyData"];
  var id = req.body["id"];

  if (!policyData || !id) {
    console.log("Invalid body");
    res.send({ result: "failed" });
    return;
  }

  userPolicies[id] = policyData;
  res.send({ result: "success" });
};

var getPolicyData = async (req, res) => {
  var id = req.params["id"];

  console.log(id, userPolicies);
  var policyData = userPolicies[id];

  if (!policyData) {
    res.send(null);
    return;
  }

  res.send(policyData);
};

module.exports = app;
