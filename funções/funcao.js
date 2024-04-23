function areaQuadrado (lado) {
    return lado * lado
}

console.log(areaQuadrado(2))

function pi() {
    return 3.14
}

var total = 5 * pi()
console.log(total)

function imc (peso, altura) { // peso e altura são parâmetros
    const imc = peso / (altura ** 2)
    return imc
}
// quando criamos uma função passamos parâmetros, já quando executamos passamos argumentos

console.log(imc (57, 1.65)) //57 e 1.65 são argumentos
console.log(imc (72, 1.70)) //72 e 1.70 são argumentos

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Você gosta do céu'
    } else if (cor === 'verde') {
        return 'Você gosta de mato'
    } else {
       return 'Você não gosta de nada'
    }
}

console.log(corFavorita('verde'))

/* Argumentos podem ser funções, quando isso ocorre chamamos de callback.
Geralmente ocorrem depois de um evento*/

addEventListener('click', function() {
    console.log('Clicou')
})
//essa função tem 2 argumentos
//primeiro é a string 'click'
//segundo é uma função anônima