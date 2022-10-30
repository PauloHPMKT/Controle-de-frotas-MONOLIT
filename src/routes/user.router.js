const userController = require('../controller/user.controller')
const userRouter = require('express').Router()

userRouter.post('/usuarios/register', userController.createUser)

module.exports = userRouter