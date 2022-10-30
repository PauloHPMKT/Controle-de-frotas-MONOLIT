const peaceRouter = require('express').Router()
const peaceController = require('../controller/peaces.controller')

peaceRouter.post('/pecas/register', peaceController.createPeace)

module.exports = peaceRouter