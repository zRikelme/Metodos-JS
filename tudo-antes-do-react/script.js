// OBJETOS
// const user = {
//   name: 'Rikelme',
//   nickname: 'Rikelme',
//   idade: 19,
//   address: {
//     street: 'Rua Jose J.N',
//     number: 35,
//   }
// }

// // DESISTRUTURAÇÃO
// function mostrarIdade({ idade }) {
//   return user.idade
// }
// document.body.innerText = mostrarIdade(user);

//outra opção de desistruturação:
// const {address, idade: age} = user
// document.body.innerText = JSON.stringify({address, age})


//REST OPERATOR

// const {name, /* <= objeto excluido */ ...rest} = user; //<= mostrar o resto do object menos o name. para aparecer outra informação e so adicionar ao objeto.
// document.body.innerText = JSON.stringify(rest)

// DESISTRUTURAÇÃO ARRAY
// const array = [1,2,3,4,5,6,7,8,9,10]; //<= desistruturar em array

// const [first, , third, ...rest] = array //<= second esta vazia por isso ele nao aparece no json.

// document.body.innerText = JSON.stringify({first, third, rest})


// SHORT SYNTAX
// const name = 'Rikelme';
// const age = 19;

// const user = {
//   name,
//   age,
// }
// document.body.innerText = JSON.stringify(user);


//OPTIONAL CHAINING: ainda entendendo o assunto
// const user = {
//   name: 'Rikelme',
//   age: 19,
//   address: {
//     street: 'Rua Jose J.N',
//     number: 35,
//   }
// }


//METODOS DE ARRAY
// const array = [1,2,3,4,5];

// for(const i of array) {
//   document.body.innerHTML += i
// }

//MAP
// const doubleNumbers = array.map((itens) => {
//   if(itens % 2 === 0) {
//     return itens * 5
//   }
//   else {
//     return itens
//   }
// })

// array.forEach((i) => {
//   document.body.innerHTML += i;
// })

//FILTER COM MAP
// const array = [1,2,3,4,5]

// const newArray = array
// .filter(item => item % 2 !== 0) 
// .map(item => item * 10)

// document.body.innerHTML = JSON.stringify(newArray)

//EVERY. vai verificar todos os itens do array para retornar um resultado true ou false
// const array = [1,2,3,4,5, 'text'];

// const todosSaoNumeros = array.every((item) => {
//   return typeof item === "number"
// })

// document.body.innerHTML = JSON.stringify(todosSaoNumeros)  

//METODO SOME. verificar pelo menos um itm
// const array = [1,2,3,4,5,'text'];

// const umItemNaoEnumero = array.some((item) => {
//   return item !== "number"
// })

// console.log(umItemNaoEnumero)

//OUTRO ASSUNTO

//Promisses
//.then, .catch.

// function somarNumero(a, b) {
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b)
//     }, 2000)
//   }) 
//   }

// somarNumero(10, 30)
// .then((soma) => {
//   document.body.innerHTML = soma
// })
// .catch((err) => {
//   console.log(err)
// })


// fetch('https//api.github.com/users/zRikelme')
// .then(response => {
//   return response.json();
// })
// .then(body => {
//   console.log(body)
// })
// .catch((err) => {
//   console.log(err)
// })
// .finally(() => { //<= mensagem depos que termina a promisse.
//   console.log('deu')
// })

// async function buscarDadosGithub() {
//   try {
//     const response = await fetch('https://api.github.com/users/zRikelme');
//     const body = await response.json();
  
//     return body.name
//   } catch(erro) {
//     console.log(erro)
//   }
//   finally {
//     console.log('terminou')
//   }
// }
// buscarDadosGithub().then(name => {
//   console.log(name)
// });