class QrCodeController {
  userPolicies = {};

  setPolicyData = async (req, res) => {
    var policyData = req.body["policyData"];
    var id = req.body["id"];

    if (!policyData || !id) {
      res.send({ result: "failed" });
      return;
    }

    this.userPolicies[id] = policyData;
    res.send({ result: "success" });
  };
  getPolicyData = async (req, res) => {
    var id = req.params["id"];

    var policyData = this.userPolicies[id];

    if (!policyData) {
      res.send(null);
      return;
    }

    res.send(policyData);
  };
}

module.exports = QrCodeController;
