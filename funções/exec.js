function meuNome (nome, sobrenome) {
    var nome = 'Ana Gloria'
    var sobrenome = 'Parente'
    return `${nome} ${sobrenome}`
}
console.log(meuNome())

/* function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenenome}`
}
*/

function ehParOuNaoEh(numero) {
    if (numero % 2 == 0) {
        return 'Eh par hein'
    } else {
        return 'Não eh par viu'
    }
}

console.log(ehParOuNaoEh(2))

function tipoDado(dado) {
    return typeof dado
}

console.log(tipoDado('ana'))

function mostraMeuNome() {
    console.log('Glorinha')
}
addEventListener('scroll', mostraMeuNome())


var totalPaises = 193
function precisoVisitar(paisesVisitados) {
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}

console.log(precisoVisitar(20))
console.log(jaVisitei(20))