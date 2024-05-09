{
    var cor = 'preto'
    const marca = 'fiat'
    let portas = 4
    console.log(cor, marca, portas)
}

//console.log(var, marca, portas) // em vez de var teria que ser o nome da variável e esta linha teria que ser dentro do bloco

const dois = 2 //teve que ser posta fora para valer pra todos
function somarDois(x) {
    return x + dois
}
function dividirDois(x) {
    return x / dois
}
console.log(somarDois(4))
console.log(dividirDois(6))


const numero = 50

for (let numero = 0; numero < 10; numero++) { //foi colocado let em vez de var para que o total fosse 500
    console.log(numero)
}

const total = 10 * numero
console.log(total)