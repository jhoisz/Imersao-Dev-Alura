/*
-----------------------
| Imersão Dev 5        |
| Aula 02              |
| Conversor de moead   |
-----------------------
*/

function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$" + valorEmReal;

    elementoValorConvertido.innerHTML = valorConvertido;
}


//DESAFIO 1: Conversão de moedas
// function ConveterRealParaEuro() {
//     var valorElemento = document.getElementById("valor");
//     var valor = valorElemento.value;
//     var valorEmRealNumerico = parseFloat(valor);

//     var valorEuro = 5.21;
//     var valorEmReal = valorEmRealNumerico * valorEuro
//     var elementoValorConvertido = document.getElementById("valorConvertido");
//     var valorConvertido = "O resultado em real é R$" + valorEmReal;
//     elementoValorConvertido.innerHTML = valorConvertido;
// }

//DESAFIO 2: Converter km para anos-luz

// function ConverterKmParaAnosLuz() {
//     var distanciaKm = parseFloat(document.getElementById("valor").value)
//     var distanciaAnosLuz = distanciaKm * 1.057e-13

//     var resultado = document.getElementById("valorConvertido")
//     var valorConvertido = "KM para Anos luz: " + distanciaAnosLuz;
//     resultado.innerHTML = valorConvertido
// }


// DESAFIO 3: Conversor de temperatura (Celsius para Kelvin e Fahrenheit)

function ConversorDeCelcius() {
    var tempCelcius = parseFloat(document.getElementById("valor").value)

    var valorEmFah

}



