var rafa = {
    nome: 'Rafa',
    vitorias: 2,
    empates: 1,
    derrotas: 2,
    pontos: 0
}

var paulo = {
    nome: 'Paulo',
    vitorias: 2,
    empates: 3,
    derrotas: 3,
    pontos: 0
}

//NaN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/NaN

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

console.log(rafa);
console.log(paulo);

var jogadores = [rafa, paulo];

function exibeJogadoresNaTela(jogadores) {
    elemento = ""

    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(i);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(i);
    exibeJogadoresNaTela(jogadores);
}