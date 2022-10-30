const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cod: { type: Number, unique: true },
    location: {
        address: {
            street: String,
            neighbor: String,
            city: String,
        },
    },
    time_inflation: Date,
    veicle_id: { type: mongoose.Schema.Types.ObjectId, ref: 'veiculos' },
    driver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'motoristas' },
    type: String,
})

const TrafficFineModel = mongoose.model('multas', schema)

module.exports = TrafficFineModel