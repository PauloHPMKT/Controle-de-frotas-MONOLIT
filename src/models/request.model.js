const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cod: { type: Number, unique: true },
    status: String,
    event: String,
    event_time: Date,
    location: {
        address: {
            street: String,
            city: String,
        },
    },
    quantity_people: Number,
    use_time: Date,
    veicle: { type: mongoose.Schema.Types.ObjectId, ref: 'veiculos' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios' },
    dept_id: { type: mongoose.Schema.Types.ObjectId, ref: 'departamentos' }
})

const RequestModel = mongoose.model('solicitacoes', schema)

module.exports = RequestModel