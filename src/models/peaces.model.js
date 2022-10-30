const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cod: { type: Number, unique: true },
    name: String,
    manufacturing: String,
    quantity: Number,
})  

const PeaceModel = mongoose.model('pecas', schema)

module.exports = PeaceModel