const numeros = [2,4,2,4,7];

const total = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
})
console.log(total)


// carrinho de compras
// retornar o total a pagar
const itens = [
  {description: 'pen', quantity: 1, price: 3},
  {description: 'rule', quantity: 2, price: 5},
  {description: 'erase', quantity: 2, price: 6},
]

const total1 = itens.reduce((soma, itemAtual) => {
  return soma + itemAtual.price * itemAtual.quantity
}, 0)

console.log(total1)

// contador de names por iniciais
const names = ["Daniel", "Maria", "Marta", "Juca", "Joao", "Jessica"]

const namesCount = names.reduce((count, nomeAtual) => {
  const firstLetter = nomeAtual[0].toLocaleLowerCase()
  if(count[firstLetter]) {
      count[firstLetter]++
  }
  else {
    count[firstLetter] = 1
  }
  return count
}, {})
console.log(namesCount)

//a partir de uma array de objetos pessoas, retornar um objeto com um contador de pessoa por idade.

const pessoas = [
  {nome: 'Daniel', idade: 28},
  {nome: 'Maria', idade: 29},
  {nome: 'Marta', idade: 28}
];

const porIdade = pessoas.reduce((pessoasIdade, pessoaAtual) => {

  pessoasIdade[pessoaAtual.idade] = pessoasIdade[pessoaAtual.idade] || []
  pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome)

  return pessoasIdade
}, {}) //<= usar isso se quiser que o resultado volte em objeto

console.log(porIdade)

//const dublePositive = numbers.filter(n => n > 0).map(n => n * 2) <= forma alternativa e resumida
//porem o array vai ser verificado 2 vezes por causa dos dois metodos(filter e map).
const numbers = [-10, 0, 2, 4];
const doublePositive = numbers.reduce((arrAcumulador, currentNumber) => {
  if(currentNumber > 0) {
    arrAcumulador.push(currentNumber * 2)
  }
  return arrAcumulador
}, []) //<= retornar um array

console.log(doublePositive)