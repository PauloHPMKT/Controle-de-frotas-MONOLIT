const mongoose = require('mongoose')

function dBconnect() {
  mongoose.connect(process.env.STRING_DB_CONNECTION)

  const db = mongoose.connection

  db.once('open', () => {
    console.log('connected to database')
  })

  db.on('error', console.error.bind(console, 'connection refused: '))
}

module.exports = {
  dBconnect,
}