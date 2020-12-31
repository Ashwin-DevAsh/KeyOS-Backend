const DatabaseService = require("../Services/DatabaseService");

class UsersController {
  databaseService = new DatabaseService();

  getUsers = async (req, res) => {
    console.log("getting users config...");
    try {
      var users = await this.databaseService.getUsers();
      res.send({ result: "success", users });
    } catch (e) {
      console.log(e);
      res.send({ result: "failure" });
    }
  };
}

module.exports = UsersController;
