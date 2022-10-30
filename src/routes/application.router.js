const applicationRouter = require('express').Router()

applicationRouter.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
})

applicationRouter.get('/funcionarios', (req, res) => {
    res.render('funcionarios', {
        title: 'Funcionários'
    })
})

applicationRouter.get('/departamentos', (req, res) => {
    res.render('departamentos', {
        title: 'Departamentos'
    })
})

applicationRouter.get('/veiculos', (req, res) => {
    res.render('veiculos', {
        title: 'Veículos'
    })
})

applicationRouter.get('/motoristas', (req, res) => {
    res.render('motoristas', {
        title: 'Motoristas'
    })
})

applicationRouter.get('/manutencoes', (req, res) => {
    res.render('manutencoes', {
        title: 'Manutenção',
    })
})

applicationRouter.get('/multas', (req, res) => {
    res.render('multas', {
        title: 'Multas',
    })
})

applicationRouter.get('/solicitacoes', (req, res) => {
    res.render('solicitacoes', {
        title: 'Solicitações',
    })
})

applicationRouter.get('/locacoes', (req, res) => {
    res.render('locacoes', {
        title: 'Locações',
    })
})

module.exports = applicationRouter
