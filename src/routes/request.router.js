const requestController = require('../controller/request.controller')
const requestRouter = require('express').Router()

requestRouter.post('/solicitacoes/register', requestController.createRequestEvent)

module.exports = requestRouter