const meuArray = [
  {nome: 'Matheus'},
  {nome: 'Henrique'},
  {nome: 'Castiglione'},
]

const dadosArray = meuArray.filter((valorAtual) => {
  return valorAtual.nome.includes('q'); //<= retornar elemento quem tem a letra.
})
console.log(dadosArray)
