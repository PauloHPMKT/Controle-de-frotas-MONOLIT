const deptRouter = require('express').Router()
const deptController = require('../controller/dept.controller')

deptRouter.post('/departamentos/register', deptController.createDept)

module.exports = deptRouter