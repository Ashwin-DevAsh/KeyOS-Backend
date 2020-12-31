const DatabaseService = require("../Services/DatabaseService");

class DevicesController {
  databaseService = new DatabaseService();

  getAllDevices = async (req, res) => {
    console.log("getting devices...");
    try {
      var devices = await this.databaseService.getAllDevices();
      res.send({ result: "success", devices });
    } catch (e) {
      console.log(e);
      res.send({ result: "failure" });
    }
  };

  getDeviceConfig = async (req, res) => {
    console.log("getting devices config...");
    var deviceID = req.params["deviceID"];

    try {
      var deviceConfig = await this.databaseService.getDeviceConfig(deviceID);
      res.send({ result: "success", deviceConfig });
    } catch (e) {
      console.log(e);
      res.send({ result: "failure" });
    }
  };

  getRegisteredDevice = async (req, res) => {
    console.log("getting registeredDevice config...");
    try {
      var devices = await this.databaseService.getRegisteredDevice();
      res.send({ result: "success", devices });
    } catch (e) {
      console.log(e);
      res.send({ result: "failure" });
    }
  };
}

module.exports = DevicesController;
