const DatabaseService = require("../Services/DatabaseService");

class QrCodeController {
  userPolicies = {};
  databaseService = new DatabaseService();

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

  setPolicyDataV2 = async (req, res) => {
    var { deviceInfo, config } = req.body;
    if (!deviceInfo || !config) {
      res.send({ result: "failed" });
      return;
    }
    this.userPolicies = config;
    this.databaseService.updateLaunchedInfo(deviceInfo, config, false);
    res.send({ result: "success" });
  };

  getPolicyDataV2 = async (req, res) => {
    var id = req.params["id"];
    var policyData =
      (await this.databaseService.getDeviceConfig(id)) || this.userPolicies[id];

    if (!policyData) {
      res.send(null);
      return;
    }

    res.send(policyData);
  };
}

module.exports = QrCodeController;
