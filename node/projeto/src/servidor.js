const porta = 3003
const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.use((req, res, next) => {
    console.log('Middleware 2...')
    next()
})

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 143.45 }) //Converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})