const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cod: Number,
    name: String,
    menager_name: String,
    cpf_meneger: String,
    inner_menager_date: Date,
    createdAt: { type: Date, default: Date.now() },
})

const DeptModel = mongoose.model('departamentos', schema)

module.exports = DeptModel