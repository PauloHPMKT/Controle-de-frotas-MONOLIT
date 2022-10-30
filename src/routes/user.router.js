const userController = require('../controller/user.controller')
const userRouter = require('express').Router()

userRouter.get('/usuarios/listar', userController.getAllUsers)
userRouter.post('/usuarios/register', userController.createUser)

module.exports = userRouter