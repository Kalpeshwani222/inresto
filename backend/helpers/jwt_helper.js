const JWT = require("jsonwebtoken");
const createError = require("http-errors");

module.exports = {
  //provide token
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.ACCESS_TOKEN_SECRET;

      const options = {
        expiresIn: "1h",
      };

      JWT.sign({ userId }, secret, options, (err, token) => {
        if (err) {
          console.log(err.message);

          // reject(err)
          reject(createError.InternalServerError());
        }
        resolve(token);
      });
    });
  },
};
