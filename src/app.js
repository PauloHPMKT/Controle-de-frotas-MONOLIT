require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

//defining public files
app.use(express.static(path.join(__dirname, 'public')))

//backend setup
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



module.exports = app