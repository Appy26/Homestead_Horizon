const express = require('express');
const { GetProperty, AddProperty, UserProperty } = require('../controllers/property.controller');

const Propertyroute = express.Router();

Propertyroute.get("/all", GetProperty)
Propertyroute.post("/add", AddProperty)
Propertyroute.get("/userproperty", UserProperty)

module.exports = Propertyroute