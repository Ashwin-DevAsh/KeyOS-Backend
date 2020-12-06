var app = require("express").Router();
const nodemailer = require("nodemailer");

app.post("/getEmailVerification", getEmailVerification);
app.post("/sendPassword", sendPassword);

app.post("/v1/getEmailVerification", getEmailVerification);
app.post("/v1/sendPassword", sendPassword);

app.post("/v1/newInstallAlert", newInstallAlert);
app.post("/v1/userLaunchedAlert", userLaunchedAlert);

var myEmail = "keyos.devash@gmail.com";
var myPassword = "Ashwin@123";

var devEmail = "2017ashwin@gmail.com";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: myEmail,
    pass: myPassword,
  },
});

async function userLaunchedAlert(req, res) {
  console.log(`User Launched : ${req.body}`);
  var {
    deviceInfo: { deviceID },
  } = req.body;
  await sendMail(
    `Device ID : ${deviceID}`,
    reformatJSON(JSON.stringify(req.body)),
    devEmail
  );
  res.send({ result: "success" });
}

async function newInstallAlert(req, res) {
  console.log(`New User : ${JSON.stringify(req.body, null, 4)}`);
  var { deviceID } = req.body;
  sendMail(
    `Device ID : ${deviceID}`,
    reformatJSON(JSON.stringify(req.body, null, 4)),
    devEmail
  );
  res.send({ result: "success" });
}

async function getEmailVerification(req, res) {
  var email = req.body["email"];
  var otp = req.body["otp"];

  console.log(req.body);

  if (!email || !otp) {
    console.log("Invalid body");
    res.send({ result: "failed" });
    return;
  }

  var isSend = await sendMail(
    "Otp Verification",
    `<p>
            KeyOS wanted to verify your email address before changing your password.
           <br/>
              Here your otp <a>${otp}</a>
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
    console.log("unable to send email");
    res.send({ result: "failed" });
    return;
  }
  res.send({ result: "success" });
}

async function sendPassword(req, res) {
  var email = req.body["email"];
  var password = req.body["password"];

  console.log(req.body);

  if (!email || !password) {
    console.log("Invalid body");
    res.send({ result: "failed" });
    return;
  }

  var isSend = await sendMail(
    "Password Recovery",
    `<p>
           Hope you enjoy the service provide by KeyOS .
           <br/>
           your password for KeyOS <a>${password}</a>
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
    console.log("unable to send email");
    res.send({ result: "failed" });
    return;
  }
  res.send({ result: "success" });
}

async function sendMail(subject, text, toEmail) {
  var mailOptions = {
    from: `KeyOS <keyos.devash@gmail.com>`,
    to: toEmail,
    subject: subject,
    html: text,
  };

  try {
    var result = await transporter.sendMail(mailOptions);
    console.log(result);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

function reformatJSON(json) {
  return `<code>${json}</code>`;
}

module.exports = app;
