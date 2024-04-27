//objeto tem várias propriedades
var pessoa = {
    nome: 'Ana Glória',
    idade: 20,
    cidade: 'Sobral'
}

// étodo tem função em uma de suas propriedades
var quadrado = {
    lados: 4,
    area (lado) {
        return lado * lado
    },
    perimetro (lado) {
        return this.lados * lado //o this é o próprio objeto e faz com quenão precisemos repetir o nome. ele simplifica
    },
}
console.log(quadrado.lados)
console.log(area(5))
console.log(perimetro(5))
//objetos são bons para organizar o código em pequenas partes reutilizáveis