function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value;
    //adicionei o toLowerCase()
    if (filmeFavorito.toLowerCase().endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito);
    } else {
        console.error("Endereço de filme inválido.")
    }
    document.getElementById('filme').value = "";
}

function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML += elementoFilmeFavorito;
}