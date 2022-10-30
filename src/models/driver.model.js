const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cod: { type: Number, unique: true },
    cnh: Number,
    cnh_category: String,
    winning: Date,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios' },
    dept_id: { type: mongoose.Schema.Types.ObjectId, ref: 'departamentos' },
})

const DriverModel = mongoose.model('motoristas', schema)

module.exports = DriverModel