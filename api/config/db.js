const mongoose = require('mongoose');
require("dotenv").config();

const connection = mongoose.connect(process.env.MongoDb_Url)

module.exports = connection