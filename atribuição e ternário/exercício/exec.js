//somar 500 ao valor de scroll atribuindo o novo valor a scroll
var scroll = 1000
scroll += 500
console.log(scroll)

//atribuir o valor true a variavel darcredito se o cliente tiver carro e casa e false caso contrario
var possuiCasa = true
var possuiCarro = true
var darcredito
darcredito = (possuiCasa && possuiCarro)
darcredito = (possuiCasa && possuiCarro) ? 'Dar credito' : 'Não dar credito'
console.log(darcredito)