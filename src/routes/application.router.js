const applicationRouter = require('express').Router()

applicationRouter.get('/', (req, res) => {
    res.render('index', {
        title: 'Pagina Inicial'
    })
})

applicationRouter.get('/funcionarios', (req, res) => {
    res.render('funcionarios', {
        title: 'Página de funcionarios'
    })
})

applicationRouter.get('/departamentos', (req, res) => {
    res.render('departamentos', {
        title: 'Página de departamentos'
    })
})

applicationRouter.get('/veiculos', (req, res) => {
    res.render('veiculos', {
        title: 'Página de Veiculos'
    })
})

applicationRouter.get('/motoristas', (req, res) => {
    res.render('motoristas', {
        title: 'Pagina de motoristas'
    })
})

applicationRouter.get('/manutencoes', (req, res) => {
    res.render('manutencoes', {
        title: 'Pagina de manutencoes',
    })
})

applicationRouter.get('/multas', (req, res) => {
    res.render('multas', {
        title: 'Pagina de multas',
    })
})

applicationRouter.get('/solicitacoes', (req, res) => {
    res.render('solicitacoes', {
        title: 'Pagina de solicitacoes',
    })
})

applicationRouter.get('/locacoes', (req, res) => {
    res.render('locacoes', {
        title: 'Pagina de Locações',
    })
})

module.exports = applicationRouter
