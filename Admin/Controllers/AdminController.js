const AdminService = require("../Services/AdminService");
const jwt = require("jsonwebtoken");

class AdminController {
  adminService = new AdminService();

  adminLogin = async (req, res) => {
    var { email, password } = req.body;

    if (!email || !password) {
      res.send({ result: "invalid body" });
      return;
    }

    var admin = this.adminService.getAdmin(email, password);
    if (!!admin) {
      var token = await jwt.sign({ email }, process.env.PRIVATE_KEY, {
        expiresIn: "24h",
      });
      res.send({ result: "success", admin, token });
      return;
    } else {
      res.send({ result: "failed" });
    }
  };
}

module.exports = AdminController;