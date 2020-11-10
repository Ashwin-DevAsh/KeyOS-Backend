const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const QrCode = require("./Routes/QrCode");
const email = require("./Routes/email");
const download = require("./Routes/download");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(email);
app.use(QrCode);
app.use(download);

app.listen(PORT, () => {
  console.log("Listining on ", PORT);
});
