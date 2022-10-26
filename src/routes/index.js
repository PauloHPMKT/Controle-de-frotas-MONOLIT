const router = require('express').Router()
const IndexController = require('../controller')

//configurando rota padrão
router.get('/', IndexController.index)

module.exports = router