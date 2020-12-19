const express = require("express")

const route = express.Router()

const method = require("../example")

route.get('/ex',method)

module.exports = route