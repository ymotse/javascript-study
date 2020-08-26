// 162 e 163. Desafio Promise

const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler...')
    })
}


const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split(/\n/))
    .then(linhas => linhas.join(','))
    .then(conteudoFinal => `O valor final é: ${conteudoFinal}`)
    .then(console.log)
    