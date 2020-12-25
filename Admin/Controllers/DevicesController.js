const DatabaseService = require("../Services/DatabaseService");

class DevicesController {
  databaseService = new DatabaseService();

  getAllDevices = async (req, res) => {
    try {
      var allDevices = this.databaseService.getAllDevices();
      res.send({ result: "success", allDevices });
    } catch (e) {
      console.log(e);
      res.send({ result: "failure" });
    }
  };

  getDeviceConfig = async (req, res) => {
    var deviceID = req.params["deviceID"];

    try {
      var deviceConfig = this.databaseService.getDeviceConfig(deviceID);
      res.send({ result: "success", deviceConfig });
    } catch (e) {
      console.log(e);
      res.send({ result: "failure" });
    }
  };
}

module.exports = DevicesController;
