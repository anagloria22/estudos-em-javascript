var midade = 21
var maeidade = 53
if (midade < maeidade) {
    console.log('É menor')
} else if (midade > maeidade) {
    console.log('É maior')
} else {
    console.log('É igual')
}

var expressao = (5 - 2) && (5 - ' ') && (5 - 2)
console.log(expressao)

var nome = 'Ana'
var idade= 20
var possuiGraduacao = false
var empregoFuturo
var dinheiroNaConta = 0
console.log(!!nome, !!idade, !!possuiGraduacao, !!empregoFuturo, !!dinheiroNaConta) //!! antes das variáveis é um jeito de verificar se um valor é true ou false
//valores falsos são aqueles '0'; 'undefined'; 'null'; 'NaN'; '""'(string vazia); 'false'
//valores verdadeiros são todos que são diferentes dos citados acima


var brasil = 207 * 1000000
var totalbr = brasil.toLocaleString('pt-br')
var china = 1340 * 1000000
var totalch = china.toLocaleString('pt-br')
console.log(`A população total do Brasil é de ${totalbr}, enquanto a da China é de ${totalch}`)



if(('Gato' == 'gato') && (5 > 2)) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}



if(('Gato' == 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão')
} else {
    console.log('Falso')
}