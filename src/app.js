require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static())

//backend setup
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



module.exports = app