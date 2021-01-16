var EmailService = require("../Services/EmailService");

class DownloadContorller {
  emailService = new EmailService();

  downloadProApk = (req, res) => {
    console.log("Downloading pro");
    const file = "../public/Apk/KeyOS.apk";
    res.download(file);
  };
}

module.exports = DownloadContorller;
