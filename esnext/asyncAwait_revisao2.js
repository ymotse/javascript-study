// 167. Async/Await #02

function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) {
        [max, min] = [min, max]
    }
    
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}


async function gerarMegaSena(qtdDeNumeros, tentativas = 1) {
    
    try {
        const numeros = []
        
        for(let _ of Array(qtdDeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        
        return numeros
    } catch (error) {
        if(tentativas > 10) {
            throw "Que chato!"
        } else {
            return gerarMegaSena(qtdDeNumeros, tentativas++)
        }
    }
}


gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)

