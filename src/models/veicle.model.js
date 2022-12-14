const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cod: { type: Number, unique: true },
    manufacturer: String,
    model: String,
    year: Number,
    categorie: String,
    headlight: String,
    change: String,
    seats: Number,
    chassis: String,
    code_board: String,
    fuel: String,
    fuel_size: String,
    current_fuel: String,
    km: Number,
})

const VeicleModel = mongoose.model('veiculos', schema)

module.exports = VeicleModel 