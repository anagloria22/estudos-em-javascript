{
    var cor = 'preto'
    const marca = 'fiat'
    let portas = 4
}

//console.log(var, marca, portas) retorna erro por conta do var que nao tem nada

function somarDois(x) {
    const dois = 2
    return x + dois
}
function dividirDois(x) {
    const dois = 3 //criada esta const p/ corrigir o erro
    return x + dois
}
console.log(somarDois(4))
console.log(dividirDois(6))

var numero = 50

for (let numero = 0; numero < 10; numero++) { //foi colocado let em vez de var para que o total fosse 500
    console.log(numero)
}

const total = 10 * numero
console.log(total)