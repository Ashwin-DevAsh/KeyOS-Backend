require("dotenv").config({ path: "./env/.env" });

const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const DatabaseService = require("./Services/DatabaseService");

const databaseService = new DatabaseService();

io.on("connection", (client) => {
  client.on("setInfo", (data) => {
    try {
      var id = data["deviceID"];

      client.join(id, (err) => {
        if (err) {
          console.log(err);
        } else {
          databaseService.updateOnline(id, client.id);
        }
      });
    } catch (err) {
      console.log(err);
    }
  });

  client.on("disconnect", function () {
    databaseService.updateOffline(client.id);
  });
});

server.listen(8000, () => {
  console.log("Listing at 8000");
});
