var copabr = [1969, 1962, 1970, 1994, 2002]

for (var vezes = 0; vezes < copabr.length; vezes++) {
    console.log(`O Brasil ganhou a copa de ${copabr[vezes]}`)
}


var frutas = ['banana', 'maçã', 'pera', 'uva', 'melancia']

for (var fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta])
    if (frutas[fruta] === 'pera') {
        break
    }
}

var fruta5 = frutas[frutas.length - 1] //pra não precisar contar cada item do array
console.log(fruta5)