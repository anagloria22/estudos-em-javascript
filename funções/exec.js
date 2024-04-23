function meuNome (nome, sobrenome) {
    var nome = 'Ana Gloria'
    var sobrenome = 'Parente'
    return `${nome} ${sobrenome}`
}

console.log(meuNome())

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