//libs
require('dotenv').config()
const express = require('express')
const path = require('path')
const db = require('./db')
const appRouter = require('./routes/application.router')

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


module.exports = app