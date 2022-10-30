const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cod: { type: Number, unique: true },
    name: String,
    email: String,
    cpf: String,
    birthday: Date,
    gender: String,
    location: {
        address: {
            street: String,
        },
    },
    dept_id: { type: mongoose.Schema.Types.ObjectId, ref: 'departamentos' },
    password: String,
    createdAt: { type: Date, default: Date.now() },
})

const UserModel = mongoose.model('usuarios', schema)

module.exports = UserModel
