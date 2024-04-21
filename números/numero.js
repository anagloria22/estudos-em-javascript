var idade = 20
var gols = 1000
var pi = 3.14 // ponto é vírgula
var exp = 2e10 // 10 é o número de zeros

console.log(idade)

var subtracao = '100' - 50 // dá 50, porque não tem o que subtrair de string e então ele converte
var multiplicacao = '100' * '2' //200
var divisao = 'Comprei 10' / 2 //NaN(not a number), porque tem caractere junto do número
//é possível verificar se uma variável é NaN ou não com a função isNan(), que no final diz se é true ou false

var testNaN = 'isso é 100' / 2
console.log(isNaN(testNaN)) // retorna true já que não é um número pois tem caractere na operação

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10 
console.log(soma1)

//Operadores Unários(incremento e decremento)
var incremento = 5
console.log(incremento++) //continua a mesma coisa, mas quando chamamos de novo
console.log(incremento) //ele adiciona +1 ao valor que estava antes do ++, é o equivalente a "incremento = incremento + 1"
// isso só épossível, porque é var(ou let), se for const não dá, porque é uma constante e não pode ser modificada

// decremento é o contrário, trocamos ++ por -- e ele diminui -1
var decremento = 10
console.log(decremento--) //quando colocamos -- depois ele primeiro mostra o valor que era e depois o que passa a ser com --, quando colocamos -- antes ele mostra logo o valor declarado -1
console.log(decremento)

//o + na frente do valor de uma string de número o transforma em formato de número
var idade = +'20'
console.log(typeof idade)