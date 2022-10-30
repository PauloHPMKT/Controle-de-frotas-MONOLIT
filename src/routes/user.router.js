const userController = require('../controller/user.controller')
const userRouter = require('express').Router()

userRouter.get('/usuarios/listar', userController.getAllUsers)
userRouter.get('/usuarios/listar/:id', userController.getUserById)
userRouter.post('/usuarios/register', userController.createUser)

module.exports = userRouter