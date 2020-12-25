const EmailService = require("../Services/EmailService");
emailService = new EmailService();

class DevAlertController {
  devEmail = "2017ashwin@gmail.com";

  async userLaunchedAlert(req, res) {
    var {
      deviceInfo: { deviceID },
    } = req.body;

    emailService.sendMail(
      `Device ID : ${deviceID}`,
      this.reformatJSON(req.body),
      this.devEmail
    );

    res.send({ result: "success" });
  }

  async newInstallAlert(req, res) {
    var { deviceID } = req.body;
    emailService.sendMail(
      `Device ID : ${deviceID}`,
      "",
      this.devEmail,
      this.reformatJSON(req.body, null, 4)
    );
    res.send({ result: "success" });
  }

  reformatJSON(json) {
    json = JSON.stringify(json, null, 4);
    json = json.split('"').join("");
    return `${json}`;
  }
}

module.exports = DevAlertController;
