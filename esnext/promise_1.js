// 159. Revisão: Promise #01

console.log(typeof Promise)

function primeiroElemento(arrayOuString) {
    return arrayOuString[0]
}

const letraMinuscula = letra => letra.toLowerCase()


let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p
    .then(primeiroElemento)
    .then(primeiro => primeiro[0])
    .then(letraMinuscula)
    // .then(v => console.log(v))
    .then(console.log)