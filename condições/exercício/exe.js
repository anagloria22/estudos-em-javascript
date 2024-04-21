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
if (nome) {
    console.log('É verdadeiro')
} else {
    console.log('É falso')
}
var idade= 20
if (idade) {
    console.log('É verdadeiro')
} else {
    console.log('É falso')
}
var possuiGraduacao = false
if (possuiGraduacao) {
    console.log('É verdadeiro')
} else {
    console.log('É falso')
}
var empregoFuturo
if (empregoFuturo) {
    console.log('É verdadeiro')
} else {
    console.log('É falso')
}
var dinheiroNaConta = 0
if (dinheiroNaConta) {
    console.log('É verdadeiro')
} else {
    console.log('É falso')
}
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