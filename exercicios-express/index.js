const express = require('express')
const app = express()

app.use('/opa', (req, res) => {
    
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
})

app.listen(3000, () => {
    console.log('Backend executando...')
})