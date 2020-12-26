module.exports = JwtConfig = (req, res, next) => {
  console.log("Middle ware");
  next();
};
