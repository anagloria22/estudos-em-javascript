var possuiGraduacao = false
var possuiDoutorado = true

if(possuiGraduacao) {
    console.log('Possui graduação')
} else if (possuiDoutorado) {
    console.log('Não possui graduação, possui é Doutorado. Chame de dotô.')
}

var x = 10
console.log(x !== 11)

if((5 - 5) && (5 + 5)) { //por 5-5 ser 0 e 0 ser um valor falso ele já retorna falso
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}

if((5 - 10) && (5 + 5)) { //por 5-10 ser um número negativo, mesmo que seja negativo é diferente de 0, então ele considera verdadeiro
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}