const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa antes1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes2')
    return cb()
}

function copiar(callback) {
    console.log('Tarefa de copiar!')
    gulp.src('pastaA/**/*.txt')
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        // .pipe(imagemPelaMetade())
        // .pipe(imagemPretoEBranco())
        // .pipe(tranformacaoA())
        // .pipe(tranformacaoB())
        // .pipe(tranformacaoC())
        .pipe(gulp.dest('pastaB'))
    return callback()
}

const fim = cb => {
    console.log('Tarefa fim')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)
