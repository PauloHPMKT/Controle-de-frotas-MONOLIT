require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

//defining static files
app.use(express.static(path.join(__dirname, 'views')))
//defining public files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index')
})


//backend setup
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



module.exports = app