var eu = {
    meuNome: 'Ana Glória',
    meuSobrenome: 'de Oliveira Parente',
    meuNomeCompleto: function () {
        return this.meuNome + ' ' + this.meuSobrenome
    },
    minhaIdade: 20,
    minhaCidade: 'Sobral',
    meuNascimento: '22/06/2003'
}

console.log(eu.meuNomeCompleto())

var carro = {
    preço: 1000,
    portas: 4,
    marca:'Audi'
}

carro.preço = 3000

console.log(carro)

var cachorro = {
    raça: 'labrador',
    cor: 'preto',
    idade: 10,
    late: function (pessoa) {
        if (pessoa === 'homem') {
            return 'latindo'
        } else {
            return 'quieto'
        }
    }
}

console.log(cachorro.late('homem'))