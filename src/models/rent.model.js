const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cod: { type: Number, unique: true },
    status: String,
    current_fuel: Number,
    arriving_fuel: Number,
    outter_km: Number,
    arriving_km: Number,
    event_type: String,
    event_time: Date,
    driver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'motoristas' },
})

const RentModel = mongoose.model('locacoes', schema)

module.exports = RentModel