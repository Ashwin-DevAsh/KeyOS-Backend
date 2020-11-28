var app = require("express").Router();
var jwt = require("jsonwebtoken");

var userPolicies = {};

app.post("/setPolicyData", setPolicyData);
app.get("/getPolicyData/:id", getPolicyData);

app.post("/v1/setPolicyData", setPolicyData);
app.get("/v1/getPolicyData/:id", getPolicyData);

var setPolicyData = async (req, res) => {
  var policyData = req.body["policyData"];
  var id = req.body["id"];

  console.log(req.body);

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
