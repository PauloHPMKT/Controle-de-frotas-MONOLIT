const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cod: { type: Number, unique: true },
    type: String,
    limit_km: Number,
    reason: String,
    observation: String,
    driver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios' },
    veicle_id: { type: mongoose.Schema.Types.ObjectId, ref: 'veiculos' },
    peace_id: { type: mongoose.Schema.Types.ObjectId, ref: 'pecas' },
    garantee: Number,
})

const MaintenanceModel = mongoose.model('manutencao', schema)

module.exports = MaintenanceModel