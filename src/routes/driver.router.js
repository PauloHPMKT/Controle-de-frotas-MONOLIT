const driverController = require('../controller/driver.controller')
const driverRouter = require('express').Router()

driverRouter.post('/motoristas/register', driverController.createDriver)

module.exports = driverRouter