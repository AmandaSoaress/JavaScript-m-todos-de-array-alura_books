let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordernarLivrosPorPreco)

function ordernarLivrosPorPreco() {
   let livrosOrdenado = livros.sort( (a , b) => a.preco - b.preco) 
   exibirOsLivrosNaTela(livrosOrdenado)
}