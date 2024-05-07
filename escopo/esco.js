function mostrarCarro() {
    var carro = 'Fusca'
    console.log(carro)
}
mostrarCarro() //aparece fusca no console
//console.log(carro) //dá erro, porque a variável carro foi definida localmente (dentro da função) e não globalmente

//o escopo evita conflitos de nomes. variáveis declaradas dentro da função não podem ser acessadas fora delas, como nos casos acima

//Escopo de Bloco
if (true) {
    const carro2 = 'fiat' 
    console.log(carro2)
}
//console.log(carro2)
//variáveis criadas com var vazam o bloco, por isso atualmente é melhor usar const ou let, porque elas respeitam o escopo de bloco

if (false) {
    var carro3 = 'corolla' 
    console.log(carro3)
}
console.log(carro3) //mesmo que a condição seja falsa, com var, a variável é criada, mas fica com undefined
// a abertura de {} cria um bloco, enquanto = {} cria um objeto

{
    var mes = 'junho'
    const ano = 2003
}
console.log(mes) //retorna junho
//console.log(ano) //dá erro

//For Loop
//se utilizarmos var dentro da condição do loop for(que é um bloco), essa variavel vai vazar e vai existir mesmo fora do loop
for (var i = 0; i < 10; i++) {
    console.log(`Número ${i}`)
}
console.log(i)