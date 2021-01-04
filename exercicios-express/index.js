const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')

app.use(saudacao('João'))

app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório <br>Completo: ${req.query.completo} <br>Ano: ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', function(parte) {
        corpo += parte
    })
    
    req.on('end', function() {
        res.send(corpo)
    })
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})



app.use('/opa', (req, res, next) => {
    console.log('Durante...')
    
    res.json({
        data: [
            { id: 1, name: 'Ana' },
            { id: 2, name: 'Bia' },
            { id: 3, name: 'Carlos' },
        ],
        count: 30,
        skip: 0,
        status: 200
    })
    
    
    // res.json({
    //     name: 'iPod 32Gb',
    //     price: 1899.90, 
    //     discount: 0.12
    // })
    
    
    // res.send('<h1>Estou bem!</h1>')
    
    next()
})

app.use('/opa', (req, res) => {
    console.log('Depois.')
})


app.listen(3000, () => {
    console.log('Backend executando...')
})