const rentController = require('../controller/rent.controller')
const rentRouter = require('express').Router()

rentRouter.post('/locacoes/register', rentController.createRentEvent)

module.exports = rentRouter