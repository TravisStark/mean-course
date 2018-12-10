const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "key-generator-string-private-key");
    next();
  }
  catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
}
