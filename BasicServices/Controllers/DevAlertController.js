const EmailService = require("../Services/EmailService");

class DevAlertController {
  devEmail = "2017ashwin@gmail.com";
  emailService = new EmailService();

  async userLaunchedAlert(req, res) {
    var {
      deviceInfo: { deviceID },
    } = req.body;

    this.emailService.sendMail(
      `Device ID : ${deviceID}`,
      this.reformatJSON(req.body),
      this.devEmail
    );

    res.send({ result: "success" });
  }

  async newInstallAlert(req, res) {
    var { deviceID } = req.body;
    this.emailService.sendMail(
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
