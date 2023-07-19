const express = require('express');
require("dotenv").config()
const app = express()
app.use(express.json())

app.listen(process.env.port, () => {
    console.log("server started")
})