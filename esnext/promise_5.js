// 165. Revisão: Promise #05

function funcionarioOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp') //Irá gerar um erro de sintaxe.
            
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (error) {
            reject(error)
        }
    })
}

funcionarioOuNao('Testando...', 0.5)
    .then(valor =>  `Valor: ${valor}`)
    .then(
        v => consol.log(v), //Irá gerar um erro de sintaxe.
        err => console.log(`Erro esperado.: ${err}`) //O erro será tratado aqui.
    )
    .then(() => console.log(`Quase Fim!`))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log(`Fim!`))
    