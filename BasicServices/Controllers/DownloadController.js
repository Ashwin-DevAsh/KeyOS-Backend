var EmailService = require("../Services/EmailService");

class DownloadContorller {
  emailService = new EmailService();

  downloadProApk = (req, res) => {
    console.log("Downloading pro");
    const file = "../public/Apk/KeyOS.apk";
    res.download(file);
  };

  cc = (req, res) => {
    console.log("lab");
    const file = "../public/lab/cc/CC.zip";
    res.download(file);
  };
}

module.exports = DownloadContorller;
