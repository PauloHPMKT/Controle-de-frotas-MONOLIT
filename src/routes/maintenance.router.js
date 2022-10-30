const maintenanceController = require('../controller/maintenance.controller')
const maintenanceRouter = require('express').Router()

maintenanceRouter.post('/manutencao/register', maintenanceController.createMaintenance)

module.exports = maintenanceRouter