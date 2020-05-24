// 17. Tipos em Javascript: Number

const peso1 = 1.1

const peso2 = Number('2.0')

console.log(peso1)
console.log(Number.isInteger(peso1))

console.log(peso2)
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.324
const avaliacao2 = 6.345

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) //em binario

console.log(typeof media)
console.log(typeof Number)
