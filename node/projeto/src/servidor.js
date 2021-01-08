const porta = 3003
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res) => {
    res.status(204).send(bancoDeDados.excluirProduto(req.params.id))
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})