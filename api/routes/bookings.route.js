const express = require('express');
const { BookProperty, GetBookings, Booked_by_user } = require('../controllers/booking.controller');

const BookingRoute = express.Router();

BookingRoute.post("/add", BookProperty)
BookingRoute.get("/all", GetBookings)
BookingRoute.get("/single", Booked_by_user)

module.exports = BookingRoute;