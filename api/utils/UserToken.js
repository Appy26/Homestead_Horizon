const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserToken = (req) => {
    const token = req.headers.authorization;
    var decoded = jwt.verify(token, process.env.secret_key);
    console.log(decoded);
    return decoded;
}

module.exports = UserToken;