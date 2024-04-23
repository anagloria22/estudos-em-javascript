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

function mostraConsole() {
    console.log('Clicou')
}

addEventListener('click', mostraConsole) //exibe a quantidade de vezes clicadas na tela

//essa função tem 2 argumentos
//primeiro é a string 'click'
//segundo é uma função anônima

function imc2(peso, altura) {
    const imc2 = peso / (altura ** 2)
    console.log(imc2)
}

imc2(80, 1.80) //undefined
//se escrevermos no console do navegador o imc2(valor1, valor2) ele vai retornar o resultado do cálculo e undefined, porque não foi definido o return

//uma funcção pode retornar qualquer tipo de dado ou outras funções, mas não é uma boa ideia que uma função só retorne mais de um tipo de dado:

function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Informe sua idade'
    } else if (idade >= 60) {
        return true
    } else {
        return false
    }
    
}

console.log(terceiraIdade('oi'))



function precisoVisitar(paisesVisitados) {
    var totalPaises = 193
    return `Ainda faltam ${totalPaises - paisesVisitados} países para você visitar`
}

console.log(totalPaises) //se executarmos essa linha não dá certo, porque não conseguimos ver uma variável que foi definida dentro de uma função, fora dela, pois foi definida localmente
precisoVisitar(50)


//escopo léxico
var profissao = 'Designer'

function dados() {
    var nome = 'André'
    var idade = 28
    function outrosDados() {
        var endereco = 'Rio de Janeiro'
        var idade = 26
        return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados()
}

console.log(dados()) //retorna o return de outrosDados()
outrosDados() //retorna um erro

//hosting
imc3 (58, 1.63)

function imc3(peso, altura) {
    const imc3 = peso / (altura ** 2)
    console.log(imc3)
}
//igual com as variáveis, antes de executar, o js move todas as funções declaradas p/ a memória