var videoGames = ['Switch', 'PS4', ' Xbox']
// videoGames.pop() elimina o ultimo elemento do array e mostra ele na tela

var ultimoItem = videoGames.pop()

videoGames.push('3DS') //adiciona no final

for (var numero = 0; numero <= 10; numero++) {
    console.log(numero)
}

var i = 0 
while (i < 5) {
    console.log(i)
    i++
}


//para acessarmos os itens do vetor e fazer com que apareçam diretamente no console sem que mostre o número, podemos fazer assim:
var games = ['mario', 'god of war', 'crash', 'lego']

for (var item = 0; item < games.length; item++) {
    console.log(games[item])
}

for (var item = 0; item < games.length; item++) {
    console.log(games[item])
    if(games[item] === 'god of war') {
        break
    }
}

//forEach é um método que executa uma função para cada item do array
games.forEach(function(item){
    console.log(item)
})