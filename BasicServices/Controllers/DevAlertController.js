const EmailService = require("../Services/EmailService");

class DevAlertController {
  emailService = new EmailService();

  userLaunchedAlert = async (req, res) => {
    var {
      deviceInfo: { deviceID },
    } = req.body;

    this.emailService.sendMail(
      `Device ID : ${deviceID}`,
      this.reformatJSON(req.body),
      this.emailService.devEmail
    );

    res.send({ result: "success" });
  };

  newInstallAlert = async (req, res) => {
    var { deviceID } = req.body;
    this.emailService.sendMail(
      `Device ID : ${deviceID}`,
      "",
      this.emailService.devEmail,
      this.reformatJSON(req.body, null, 4)
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
