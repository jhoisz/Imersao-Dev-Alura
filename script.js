/*
-----------------------
| Imersão Dev 5        |
| Aula 01              |
| Calculadora de média |
-----------------------
*/

var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 2

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4
var notaFixada = notaFinal.toFixed(1)
console.log(notaFixada)

//DESAFIO 1: Separar o cálculo

// var somaDasNotas = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre
// var notaFinal = somaDasNotas / 4
// var notaFixada = notaFinal.toFixed(1)

// console.log(notaFixada)

//DESAFIO 2: Usar condicionais para mostrar se foram aprovados

// if (notaFinal >= 7) {
//     console.log("Aprovado!")
// } else {
//     console.log("Reprovado!")
// }

//DESAFIO 3: Conversão de Fahrenheit para Celsius

// console.log('Convertendo de Fahrenheit para Celsius:')

// var tempFahrenheit = 70
// var tempCelsius = (tempFahrenheit - 32) / 1.8

// console.log(tempFahrenheit + 'ºF é ' + tempCelsius.toFixed(2) + 'ºC')

// DESAFIO 4: Fazer operações e imprimir a média no console.log

console.log(((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1))

// DESAFIO 5: Escrever na página e não no console

// document.write("Sua nota é: " + notaFixada)
//ou
// alert("Sua nota é: " + notaFixada)
//ou
document.write("<h1>" + "Sua nota é: " + notaFixada + "</h1>")

// DESAFIO 6: Mudar a cor do fundo e a imagem
//Alterei em body (style.css):
// background-color: blue;
// background-image: url('https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');