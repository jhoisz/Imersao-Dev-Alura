var carta1 = {
    nome: "Bulbassauro",
    imagem: "https://imagem.natelinha.uol.com.br/original/bulbassauro_1ca0240e601d75bbec4d34209071388e9e8df0e9.jpeg",

    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth Vader",
    imagem: "https://br.web.img3.acsta.net/newsv7/22/05/06/20/55/4497665.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

var carta3 = {
    nome: "Shiryu do dragão",
    imagem: "https://i.pinimg.com/originals/a7/bb/6a/a7bb6ac1d7dae2898c4b74f3226676e0.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

var cartas = [carta1, carta2, carta3];


var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt((Math.random() * 3));
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt((Math.random() * 3));
    while (numeroCartaJogador == numeroCartaMaquina) {
        var numeroCartaJogador = parseInt((Math.random() * 3));
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    // exibirOpcoes();
    exibirCartaJogador();

}

// function exibirOpcoes() {
//     var opcoes = document.getElementById("opcoes")
//     var opcoesTexto = ""

//     for (var atributo in cartaJogador.atributos) {
//         opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
//     }

//     opcoes.innerHTML = opcoesTexto;
// }

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {

            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    // var htmlResultado;

    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>venceu</p>";
        elementoResultado.innerHTML = "Você venceu"
    } else if (valorCartaJogador < valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>perdeu</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>empatou</p>";
    }

    divResultado.innerHTML = htmlResultado;
    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height:inherit; position: absolute; ">';

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto
            += "<input type='radio' name='atributo' value='"
            + atributo
            + "'>"
            + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }

    var nome = `<p class= "carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height:inherit; position: absolute; ">';

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto
            += "<p type='radio' name='atributo' value='"
            + atributo
            + "'>"
            + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }

    var nome = `<p class= "carta-subtitle">${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}