//libs
require('dotenv').config()
const express = require('express')
const path = require('path')
const db = require('./db')

//express instance
const app = express()


//defining static files
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'public')))

//connecting database
db.dBconnect()

//backend setup
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//rotas
app.get('/', (req, res) => {
  res.render('index')
})


module.exports = app