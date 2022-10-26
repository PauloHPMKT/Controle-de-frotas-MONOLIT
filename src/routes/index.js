const router = require('express').Router()
const userController = require('../controller/user.comtroller')

router.get('/', (req, res) => {
  return res.render('index.html')
})

router.post('/usuario/register', userController.createUser)

module.exports = router