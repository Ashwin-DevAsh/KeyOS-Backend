const nodemailer = require("nodemailer");

module.exports = class EmailService {

  myEmail = "no-replay@keyos.in";
  myPassword = "2017PASS@dev";
  devEmail = "keyos.devash@gmail.com";

  transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: this.myEmail,
      pass: this.myPassword,
    },
  });

  sendMail = async (subject, text, toEmail) => {
    var mailOptions = {
      from: `Pished <no-replay@keyos.in>`,
      to: toEmail,
      subject: subject,
      html: text,
    };

    try {
      var result = await this.transporter.sendMail(mailOptions);
      console.log(result);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
};
