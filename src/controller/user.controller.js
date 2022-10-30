const { Encript } = require('../helpers')
const UserModel = require('../models/user.model')

function getAllUsers(req, res) {
    UserModel
        .find()
        .sort({ createdAt: -1 })
        .populate('dept_id', 'name')
        .exec((err, user) => {
            if (err) res.status(400).send({ message: `${err.message}` })
            else res.status(200).send(user)
        })
}

async function createUser(req, res) {
    const { ...data } = req.body

    const hashingPassword = await Encript.EncodePass(data.password)

    const user = new UserModel({ ...data, password: hashingPassword })
    
    user.save()
    res.json({ user })
}
 
module.exports = {
    getAllUsers,
    createUser,
}