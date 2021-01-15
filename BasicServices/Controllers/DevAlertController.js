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
        "<br/>" +
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
    var text = this.objectRecussion(json);
    return `<p style="color:black">${text}<p>`;
  }

  objectRecussion = (demo, output = "", space = "&ensp;") => {
    for (var i in demo) {
      let element = demo[i];
      var key = i; // === String(Number(i)) ? "" : i;
      if (typeof element == "object") {
        if (element.length != 0)
          output = this.objectRecussion(
            element,
            `${output + space} <br> ${key} <br>`,
            space + space
          );
      } else {
        output = `${output}${space}${key ? `${key} is ` : ""}${element}<br>`;
      }
    }
    return output;
  };
}

module.exports = DevAlertController;
