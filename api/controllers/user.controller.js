const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const UserToken = require("../utils/UserToken")
require("dotenv").config();


const RegisterFunction = async (req, res) => {
    try {
        let { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'name, email and password are required',
            });
        }

        // check if user already registered
        let user = await UserModel.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: 'User already registered',
            });
        }
        bcrypt.hash(password, 5, function (err, hash) {
            // Store hash in your password DB.
            if (err) throw err;
            else {
                let guest = new UserModel({ name, email, password: hash });
                guest.save();
                res.send({ "msg": "Added User" })
            }
        });


    } catch (error) {
        res.send({ "error": error.message });
    }
}

const Login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await UserModel.find({ email })
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, function (err, result) {
                if (err) {
                    res.send({ "error": err.message });
                }
                else {
                    let token = jwt.sign({ userId: user[0]._id, username: user[0].name, user_email: user[0].email }, process.env.secret_key);
                    res.send({ "token": token, "msg": "Successfully signed in" })
                }
            });
        }
        else {
            res.send({ "msg": "Please Register First" })
        }
    } catch (error) {
        res.send({ "error": error.message });
    }
}

const Profile = async (req, res) => {
    try {
        const user = UserToken(req)
        console.log(user)
        if (user) {
            const userdata = await UserModel.find({ _id: user.userId })
            console.log(userdata)
            res.send({ "user": userdata })
        }
        else {
            res.send({ "user": "" })
        }
    } catch (error) {
        res.send({ "error": error.message });
    }
}
module.exports = { RegisterFunction, Login, Profile }