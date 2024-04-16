var nome = 'Ana' //string
var sobrenome = 'Glória'
var nomeCompleto = nome + ' ' + sobrenome //quando concatena vai emendado, então colocamos espaço p/ separar
var idade = 20 // number
var possuiFaculdade = true //boolean, vai ser sempre true ou false
var time //undefined, que é quando não tem valor
var comida = null //é nulo
var simbolo = Symbol() //symbol
var novoObjeto = {} //object

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof time)
console.log(typeof comida) //o tipo é object, antes do javascript era assim, mas mantiveram pra não quebrar muito código
console.log(typeof simbolo)

console.log(nomeCompleto)

var gols = 1000
var frase = 'Romário fez ' + gols + ' gols'
var frase2 = `Romário fez ${gols * 2} gols` //com crase conseguimos colocar esse placeholder que vai direto a variável sem precisar concatenar e é possível fazer até operações
console.log(frase) // quando somamos string com número, o resultado do tipo vai ser sempre uma string
console.log(frase2)
console.log(typeof frase)

var ano = '2018' //embora seja número, quando está entre aspas vira string, e quando é somado a um número ou string fica concatenado. Se for formato de número a soma é feita normalmente
var mes = 8
console.log(ano + mes)