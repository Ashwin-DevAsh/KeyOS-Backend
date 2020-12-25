const EmailService = require("../Services/EmailService");
emailService = new EmailService();

class PasswordController {
  async sendPassword(req, res) {
    var email = req.body["email"];
    var password = req.body["password"];

    if (!email || !password) {
      res.send({ result: "failed" });
      return;
    }

    var isSend = await emailService.sendMail(
      "Password Recovery",
      `<p>
           Hope you enjoy the service provide by KeyOS .
           <br/>
           your password for KeyOS <br/> <h4>${password}</h4>
           <br/>
           <br/>
              Thanks
           <br/>
              The KeyOS Team
            <br/><br/>
            Any quries visit https://www.KeyOS.in/
        <p>`,
      email
    );
    if (!isSend) {
      res.send({ result: "failed" });
      return;
    }
    res.send({ result: "success" });
  }

  async getEmailVerification(req, res) {
    var email = req.body["email"];
    var otp = req.body["otp"];

    if (!email || !otp) {
      console.log("Invalid body");
      res.send({ result: "failed" });
      return;
    }

    var isSend = await emailService.sendMail(
      "Otp Verification",
      `<p>
            KeyOS wanted to verify your email address before changing your password.
           <br/>
           <br/>
              Here your otp <br/> <h1>${otp}</h1>
           <br/>
          
              Thanks
           <br/>
              The KeyOS Team
            <br/><br/>
            Any quries visit https://www.KeyOS.in/
        <p>`,
      email
    );
    if (!isSend) {
      res.send({ result: "failed" });
      return;
    }
    res.send({ result: "success" });
  }
}

module.exports = PasswordController;
