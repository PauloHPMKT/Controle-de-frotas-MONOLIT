const veicleController = require('../controller/veicle.controller')
const veicleRouter = require('express').Router()

veicleRouter.post('/veiculos/register', veicleController.createVeicle)
module.exports = veicleRouter