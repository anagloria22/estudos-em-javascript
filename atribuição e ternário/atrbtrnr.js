var num = 19
var num2 = 10
num += 10 //é a mesma coisa que num = num + 10
num += num2 // é  amesma coisa que num = num + num2
// podemos fazer para /, *, +, -, **, %

//Operador Ternário
var idade = 20
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber'
console.log(podeBeber)
//primeiro temos a condição, depois colocamos o valor que venha a ser se for verdadeiro e em seguida o que for falso, ficando assim: condição ? true : false
//Geralmente utilizamos quando precisamos atribuir um valor a uma variável dependendo de uma condição

//If Abreviado
//não precisamos abrir e fechar chaves se retornarmos apenas umalinha de código, por exemplo:
var possuiFaculdade = true
if(possuiFaculdade) console.log('Tem faculdade')
    else console.log('Não tem faculdade')
//ou
if (possuiFaculdade)
    console.log('Tem faculdade')
else
    console.log('Não tem faculdade')