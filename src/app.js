//libs
require('dotenv').config()
const express = require('express')
const path = require('path')
const db = require('./db')
const appRouter = require('./routes/application.router')
const deptRouter = require('./routes/dept.router')
const driverRouter = require('./routes/driver.router')
const maintenanceRouter = require('./routes/maintenance.router')
const peaceRouter = require('./routes/peaces.router')
const rentRouter = require('./routes/rent.router')
const requestRouter = require('./routes/request.router')
const infrationRouter = require('./routes/traffic_fine.router')
const userRouter = require('./routes/user.router')
const veicleRouter = require('./routes/veicle.router')

//express instance
const app = express()

//connecting database
db.dBconnect()

//defining engine
app.set('view engine', 'ejs')

//defining static files
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

//backend setup
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routers
app.use(appRouter)
app.use(userRouter)
app.use(deptRouter)
app.use(veicleRouter)
app.use(driverRouter)
app.use(maintenanceRouter)
app.use(peaceRouter)
app.use(infrationRouter)
app.use(rentRouter)
app.use(requestRouter)

module.exports = app