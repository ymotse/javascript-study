// 151. Map

const tecnologias = new Map()
tecnologias.set('react', { framwework: false })
tecnologias.set('angular', { framwework: true })

console.log(tecnologias.react) //Undefined
console.log(tecnologias.get('react').framwework)


const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
console.log(chavesVariadas)
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)