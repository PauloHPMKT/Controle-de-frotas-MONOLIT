const userRouter = require('express').Router()
const UserController = require('../controller/user.controller')

userRouter.post('/user/register', UserController.createUser)

userRouter.get('/funcionarios', (req, res) => {
    res.render('funcionarios', {
        title: 'Página de funcionarios'
    })
})

userRouter.get('/departamentos', (req, res) => {
    res.render('departamentos', {
        title: 'Página de departamentos'
    })
})

userRouter.get('/veiculos', (req, res) => {
    res.render('veiculos', {
        title: 'Página de Veiculos'
    })
})

userRouter.get('/motoristas', (req, res) => {
    res.render('motoristas', {
        title: 'Pagina de motoristas'
    })
})

userRouter.get('/manutencoes', (req, res) => {
    res.render('manutencoes', {
        title: 'Pagina de manutencoes',
    })
})

userRouter.get('/multas', (req, res) => {
    res.render('multas', {
        title: 'Pagina de multas',
    })
})

userRouter.get('/solicitacoes', (req, res) => {
    res.render('solicitacoes', {
        title: 'Pagina de solicitacoes',
    })
})

userRouter.get('/locacoes', (req, res) => {
    res.render('locacoes', {
        title: 'Pagina de Locações',
    })
})

module.exports = userRouter
