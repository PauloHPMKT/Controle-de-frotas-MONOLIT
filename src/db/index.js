const mongoose = require('mongoose')

function dBconnect() {
  mongoose.connect('mongodb://localhost:27017/banco-de-teste')

  const db = mongoose.connection

  db.once('open', () => {
    console.log('connected to database')
  })

  db.on('error', console.error.bind(console, 'connection refused: '))
}

module.exports = {
  dBconnect,
}