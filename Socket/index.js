require("dotenv").config({ path: "./env/.env" });

const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const DatabaseService = require("./Services/DatabaseService");

const databaseService = new DatabaseService();

io.on("connection", (client) => {
  client.on("getInformation", (data) => {
    try {
      var id = data["deviceID"];
      client.join(id, (err) => {
        if (err) {
          console.log(err);
        } else {
          databaseService.updateOnlineStatus(id, true);
        }
      });
    } catch (err) {
      console.log(err);
    }
  });
});

server.listen(8000, () => {
  console.log("Listing at 8000");
});
