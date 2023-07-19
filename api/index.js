const express = require('express');
const cors = require('cors');
const connection = require('./config/db');
const UserRoute = require('./routes/user.route');
const Propertyroute = require('./routes/property.route');
const BookingRoute = require('./routes/bookings.route');
require("dotenv").config();

const app = express();
app.use(express.json())
app.use(cors());

app.use("/user", UserRoute);
app.use("/property", Propertyroute);
app.use("/bookings", BookingRoute);

app.listen(process.env.Server_Port, async () => {
    try {
        await connection;
        console.log("successfully connected to Database");
    } catch (error) {
        console.log(error.message);
    }
    console.log("Server Started");
})