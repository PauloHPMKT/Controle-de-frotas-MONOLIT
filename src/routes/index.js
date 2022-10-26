const router = require('express').Router()
const userController = require('../controller/user.controller')
const IndexController = require('../controller')

router.get('/', IndexController.index)

/*router.get('/', (req, res) => {
  return res.render('index', {
    title: 'Página Inicial',
  })
})*/

router.post('/usuario/register', userController.createUser)

module.exports = router