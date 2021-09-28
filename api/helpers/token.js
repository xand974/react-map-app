const jwt = require("jsonwebtoken");

module.exports = {
  generateToken: (user) => {
    return jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_ACCESS_TOKEN,
      {
        expiresIn: "1d",
      }
    );
  },
};
