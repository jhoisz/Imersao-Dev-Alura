var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 2

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4
var notaFixada = notaFinal.toFixed(1)
console.log(notaFixada)

//desafio 1:

var somaDasNotas = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre

var notaFinal = somaDasNotas / 4

var notaFixada = notaFinal.toFixed(1)

console.log(notaFixada)

//desafio 2:

if (notaFinal >= 7) {
    console.log("Aprovado!")
} else {
    console.log("Reprovado!")
}

//desafio 3:
console.log('Convertendo de Fahrenheit para Celsius:')
var tempFahrenheit = 70

var tempCelsius = (tempFahrenheit - 32) / 1.8
console.log(tempFahrenheit + 'ºF é ' + tempCelsius.toFixed(2) + 'ºC')

// desafio 4:

console.log(((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1))