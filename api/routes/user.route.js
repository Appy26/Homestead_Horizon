const express = require('express');
const { RegisterFunction, Login, Profile } = require('../controllers/user.controller');

const UserRoute = express.Router();

UserRoute.post("/register", RegisterFunction)

UserRoute.post("/login", Login)

UserRoute.get("/profile", Profile)

module.exports = UserRoute;