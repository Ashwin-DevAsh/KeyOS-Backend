var app = require("express").Router();
const { default: EmailService } = require("../Services/EmailService");
var emailService = new EmailService();

app.post("/getEmailVerification", getEmailVerification);
app.post("/sendPassword", sendPassword);

app.post("/v1/getEmailVerification", getEmailVerification);
app.post("/v1/sendPassword", sendPassword);

app.post("/v1/newInstallAlert", newInstallAlert);
app.post("/v1/userLaunchedAlert", userLaunchedAlert);

var devEmail = "2017ashwin@gmail.com";

async function userLaunchedAlert(req, res) {
  var {
    deviceInfo: { deviceID },
  } = req.body;
  emailService.sendMail(
    `Device ID : ${deviceID}`,
    reformatJSON(req.body),
    devEmail
  );
  res.send({ result: "success" });
}

async function newInstallAlert(req, res) {
  console.log(`New User : ${req.body}`);
  var { deviceID } = req.body;
  emailService.sendMail(
    `Device ID : ${deviceID}`,
    "",
    devEmail,
    reformatJSON(req.body, null, 4)
  );
  res.send({ result: "success" });
}

async function getEmailVerification(req, res) {
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
    console.log("unable to send email");
    res.send({ result: "failed" });
    return;
  }
  res.send({ result: "success" });
}

function reformatJSON(json) {
  json = JSON.stringify(json, null, 4);
  json = json.split('"').join("");
  return `${json}`;
}

module.exports = app;
