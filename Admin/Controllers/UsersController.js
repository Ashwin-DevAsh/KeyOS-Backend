const DatabaseService = require("../Services/DatabaseService");

class UsersController {
  databaseService = new DatabaseService();

  getUsers = async (req, res) => {
    try {
      var users = await this.databaseService.getUsers();
      res.send({ result: "success", users });
    } catch (e) {
      console.log(e);
      res.send({ result: "failure" });
    }
  };

  getUserDevices = async (req, res) => {
    var email = req.params["email"];

    try {
      var users = await this.databaseService.getUserdevices(email);
      res.send({ result: "success", users });
    } catch (e) {
      console.log(e);
      res.send({ result: "failure" });
    }
  };
}

module.exports = UsersController;
