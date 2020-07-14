// 112. Map #02

const carrinho = [
    '{ "nome" : "Borracha", "preco" : 3.45 }',
    '{ "nome" : "Caderno", "preco" : 13.90 }',
    '{ "nome" : "Kit de Lápis", "preco" : 41.22 }',
    '{ "nome" : "Caneta", "preco" : 7.50 }'
]

// Retornar um array apenas com os precos

const precos = []

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)