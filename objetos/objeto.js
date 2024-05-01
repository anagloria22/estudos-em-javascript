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
//se no console do navegador colocarmos console.table(quadrado) ele vai organizar numa tabela os dados dessa variável

var height = 100
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#ffffff',
    metadeHeight() {
        return this.height / 2 //se não especificarmos com o this ele vai pegar a que foi definida fora do objeto e se não tiver nenhuma, vai dar erro
    }
}

var bg = menu.backgroundColor // vai retornar #ffffff
//utilizamos o . para acessar as propriedades de um objeto(chamamos isso de Dot Notation Get). com ele também podemos adicionar novos métodos e propriedades por ex.:
menu.color = 'blue'
menu.esconder = function() {
    console.log('Escondi')
}

menu.backgroundColor = '#000000'
console.log(menu.backgroundColor) //retorna #000000
//quando substituímos o valor de uma propriedade por outro chamamos de Dot Notation Set
//menu.hasOwnProperty é um método que verifica se tenho determinada propriedade que foi criada dirtamento no objeto, ex.: menu.hasOwnProperty('color')

//Tudo é Objeto
//Strings, números, boolean e etc possuem propriedades e métodos o que tornam eles objetos
var nome = 'Ana'

console.log(nome.length) //retorna 5 que é o tamanho da string
console.log(nome.charAt(1)) //retorna N que é a letra que está na posição 1
console.log(nome.replace('na', 'ne')) //retorna Ane, já que substitui o na por ne 
console.log(nome) //retorna o valor da variável
//uma string herda propriedades e método do construtor String()

//Números
var altura = 1.8

altura.toString() //retorna '1.8' transforma numa string
altura.toFixed() // retorna '2' arredonda

function areaQuadrado(lado) {
    return lado * lado
}

console.log(areaQuadrado.toString()) //retorna a função em forma de string
console.log(areaQuadrado.length) //retorna o tanto de argumentos que podemos passar na função