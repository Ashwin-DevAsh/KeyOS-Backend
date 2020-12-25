const nodemailer = require("nodemailer");

export default class EmailService {
  myEmail = "keyos.devash@gmail.com";
  myPassword = "Ashwin@123";

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: myEmail,
      pass: myPassword,
    },
  });

  async sendMail(subject, text, toEmail, rawText = null) {
    var mailOptions = {
      from: `KeyOS <keyos.devash@gmail.com>`,
      to: toEmail,
      subject: subject,
      html: text,
    };

    if (!!rawText) {
      mailOptions.text = rawText;
    }

    try {
      var result = await transporter.sendMail(mailOptions);
      console.log(result);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
