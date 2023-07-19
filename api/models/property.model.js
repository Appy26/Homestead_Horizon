const mongoose = require('mongoose');

const propert_schema = mongoose.Schema({
    user: { type: mongoose.Schema.ObjectId, ref: "Host", required: true },
    title: { type: String, required: true },
    address: { type: String, required: true },
    photos: [{ type: String, required: true }],
    no_of_rooms: { type: Number, required: true },
    price: { type: Number, required: true },
})

const PropertyModel = mongoose.model("Property", propert_schema)

module.exports = PropertyModel