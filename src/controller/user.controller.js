const UserModel = require('../models/user.model')

async function createUser(req, res) {
    const { name, email, password } = req.body

    const user = new UserModel({ name, email, password })

    
    user.save()
    res.render('register/register.ejs', {
        title: 'Página de Cadastro',
    }).json({ user })

}

module.exports = {
    createUser,
}