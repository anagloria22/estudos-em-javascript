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
for (var i = 0; i < 10; i++) { //se usarmos let ela não vaza e existe só dentro do loop
    console.log(`Número ${i}`)
}
console.log(i)

//Const
//const mantém o escopo no bloco e impede a redeclaração da variável e alteração no valor
const mes2 = 'dezembro'
//mes = 'janeiro' //dá erro pois já foi declarada
//const semana //dá erro pois foi declarada sem valor

const data = {
    dia: 28,
    mes3: 'dezembro',
    ano: 2018
}

data.dia = 29
//data = 'janeiro'

//Let
//mantém o escopo no bloco, impede a redeclaração, mas permite que o valor da variável seja modificado
let ano2
ano2 = 2003
ano2++
console.log(ano2)
let ano = 2020 //dá erro, porque redeclarou a variável