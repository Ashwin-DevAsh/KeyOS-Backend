var EmailService = require("../Services/EmailService");

class DownloadContorller {
  emailService = new EmailService();

  downloadProApk = (req, res) => {
    this.emailService.sendMail(
      "Update Apk",
      "Pro apk download request",
      this.emailService.devEmail
    );
    const file = "../public/Apk/KeyOS.apk";
    res.download(file);
  };
}

module.exports = DownloadContorller;
