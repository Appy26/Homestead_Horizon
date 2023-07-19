const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "Host",
    },
    place: {
        type: mongoose.Schema.ObjectId,
        ref: "Property",
    },
    checkIn: {
        type: Date,
        required: true,
    },
    checkOut: {
        type: Date,
        required: true,
    },
    name: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const BookingModel = mongoose.model("Booking", bookingSchema);

module.exports = BookingModel;