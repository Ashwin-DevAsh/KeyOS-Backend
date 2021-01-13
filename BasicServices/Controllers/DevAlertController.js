const EmailService = require("../Services/EmailService");
const DatabaseService = require("../Services/DatabaseService");

class DevAlertController {
  emailService = new EmailService();
  databaseService = new DatabaseService();

  userLaunchedAlert = async (req, res) => {
    var { deviceInfo, config, isLaunched } = req.body;

    this.emailService.sendMail(
      `Device ID : ${deviceInfo.deviceID}`,
      `<h1> ${isLaunched ? "Launched" : "Removed"}</h1><br/>` +
        this.reformatJSON(req.body),
      this.emailService.devEmail
    );
    this.databaseService.updateLaunchedInfo(deviceInfo, config, isLaunched);
    res.send({ result: "success" });
  };

  crashAlert = async (req, res) => {
    var { deviceInfo, exception } = req.body;

    this.emailService.sendMail(
      `Device ID : ${deviceInfo.deviceID}`,
      `<h1>App Crash</h1><br/>` +
        this.reformatJSON(deviceInfo) +
        "\n" +
        exception,
      this.emailService.devEmail
    );
    res.send({ result: "success" });
  };

  newInstallAlert = async (req, res) => {
    var deviceInfo = req.body;
    this.emailService.sendMail(
      `Device ID : ${deviceInfo.deviceID}`,
      "<h1>New Install</h1><br/>" + this.reformatJSON(req.body, null, 4),
      this.emailService.devEmail
    );
    this.databaseService.insertNewDevice(deviceInfo);
    res.send({ result: "success" });
  };

  proApkDownloadAlert = (req, res) => {
    var deviceInfo = req.body;
    this.emailService.sendMail(
      `Device ID : ${deviceInfo.deviceID}`,
      "<h1>Pro Apk Download</h1><br/>" + this.reformatJSON(req.body, null, 4),
      this.emailService.devEmail
    );
    res.send({ result: "success" });
  };

  reformatJSON(json) {
    json = JSON.stringify(json, null, 4);
    json = json.split('"').join("");
    return `${json}`;
  }
}

module.exports = DevAlertController;
