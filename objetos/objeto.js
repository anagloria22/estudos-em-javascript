//objeto tem várias propriedades
var pessoa = {
    nome: 'Ana Glória',
    idade: 20,
    cidade: 'Sobral'
}

// método tem função em uma de suas propriedades
var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado
    },
    perimetro(lado) {
        return this.lados * lado //o this é o próprio objeto e faz com quenão precisemos repetir o nome dele simplifica
    },
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))
//objetos são bons para organizar o código em pequenas partes reutilizáveis

Math.PI // retorna 3,14 que é o valor de pi
Math.random() // retorna um número aleatório 

var pi = Math.PI //Math é um objeto nativo de javascript
console.log(pi) //console é um objeto e log() é um método