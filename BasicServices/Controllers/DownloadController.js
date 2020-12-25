class DownloadContorller {
  downloadProApk = (req, res) => {
    const file = "../public/Apk/KeyOS.apk";
    res.download(file);
  };
}

module.exports = DownloadContorller;
