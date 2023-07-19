const PropertyModel = require("../models/property.model");
const UserToken = require("../utils/UserToken");


const AddProperty = async (req, res) => {
    try {
        let userData = UserToken(req)
        const { title, address, photos, no_of_rooms, price } = req.body;
        const property = new PropertyModel({ user: userData.userId, title, address, photos, no_of_rooms, price })
        property.save();
        res.send({ "msg": "Added a new Property Successfully" })
    } catch (error) {
        res.send({ "error": error.message });
    }
}

const GetProperty = async (req, res) => {
    try {
        let properties = await PropertyModel.find().populate("user")
        res.send({ "data": properties })
    } catch (error) {
        res.send({ "error": error.message });
    }
}

const UserProperty = async (req, res) => {
    try {
        let userData = UserToken(req);
        let Id = userData.userId;
        console.log(Id)
        let userproperties = await PropertyModel.find({ user: Id });
        res.send({ "user": userproperties })
    } catch (error) {
        res.send({ "error": error.message });
    }
}

module.exports = { AddProperty, GetProperty, UserProperty }