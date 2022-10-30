const infrationController = require('../controller/traffic_fine.controller')
const infrationRouter= require('express').Router()

infrationRouter.post('/multas/register', infrationController.createInfration)

module.exports = infrationRouter