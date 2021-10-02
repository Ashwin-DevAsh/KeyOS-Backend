const nodemailer = require("nodemailer");

module.exports = class EmailService {

  myEmail = "noreplay.keyos@gmail.com";
  myPassword = "Ashwin@123";
  devEmail = "2017devash@gmail.com";

  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: this.myEmail,
      pass: this.myPassword,
    },
  });

  sendMail = async (subject, text, toEmail) => {
    var mailOptions = {
      from: `KeyOS <noreplay.keyos@gmail.com>`,
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
