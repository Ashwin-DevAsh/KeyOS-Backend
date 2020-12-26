const jwt = require("jsonwebtoken");

module.exports = JwtConfig = async (req, res, next) => {
  console.log("Middle ware");
  try {
    await jwt.verify(req.get("token"), process.env.PRIVATE_KEY).id;
    next();
  } catch (e) {
    console.log(e);
    res.send({ message: "invalid admin" });
    return;
  }
};
