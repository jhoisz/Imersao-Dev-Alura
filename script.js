/*
--------------------
| Imersão Dev 5     |
| Aula 04           |
| Projeto AluraFlix |
--------------------
*/

var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg?20190702191337",
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
]


for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">")
}

// elemento               0            1               2
// índice                 0            1               2

//SOBRE ARRAYS EM JS
//Documentação Mozilla: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
//Artigo da Alura: https://www.alura.com.br/artigos/javascript-para-que-serve-array


//adicionando novos elementos em arrays
// listaFilmes.push("Harry Potter 3")
// listaFilmes.push("Harry Potter 4")

//Primeira forma de impressão:
// document.write("<p>" + listaFilmes[0] + "</p>")
// document.write("<p>" + listaFilmes[1] + "</p>")
// document.write("<p>" + listaFilmes[2] + "</p>")
// document.write("<p>" + listaFilmes[3] + "</p>")

//OU

//segunda forma de impressão:
// for (var indice = 0; indice < listaFilmes.length; indice++) {
//     document.write("<p>" + listaFilmes[indice] + "</p>")
// }

//DESAFIOS
//Usar ForEach
//Não permitir filmes repetidos
//Criar input e botão para adicionar filmes