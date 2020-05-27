// 25. Entendendo Null e Undefined

let valor //Nao inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
// console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)


