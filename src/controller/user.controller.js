const { Encript } = require('../helpers')
const UserModel = require('../models/user.model')

async function createUser(req, res) {
    const { ...data } = req.body

    const hashingPassword = await Encript.EncodePass(data.password)

    const user = new UserModel({ ...data, password: hashingPassword })
    
    user.save()
    res.json({ user })
}
 
module.exports = {
    createUser,
}