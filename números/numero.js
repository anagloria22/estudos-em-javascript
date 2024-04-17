var idade = 20
var gols = 1000
var pi = 3.14 // ponto é vírgula
var exp = 2e10 // 10 é o número de zeros

console.log(idade)

var subtracao = '100' - 50 // dá 50, porque não tem o que subtrair de string e então ele converte
var multiplicacao = '100' * '2' //200
var divisao = 'Comprei 10' / 2 //NaN(not a number), porque tem caractere junto do número
//é possível verificar se uma variável é NaN ou não com a função isNan(), que no final diz seé true ou false

var testNaN = 'isso é 100' / 2
console.log(isNaN(testNaN)) // retorna true já que não é um número pois tem caractere na operação