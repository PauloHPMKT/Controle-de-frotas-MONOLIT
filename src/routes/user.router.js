const userRouter = require('express').Router()
const UserController = require('../controller/user.controller')

userRouter.post('/user/register', UserController.createUser)

module.exports = userRouter
