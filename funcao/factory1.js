// 82. Função Factory #01

// Factory é uma função que retorna um novo objeto.

//Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
