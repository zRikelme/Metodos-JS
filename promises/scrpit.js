const promesa = new Promise((resolve, reject) => {
 const condicao = true;
 
  setTimeout(() => {
    if(condicao) {
    resolve({nome: 'rikelme', idade: 19}); //tmb pode se adicionados objectos e strings.
  }
  else {
    reject(Error('ocorreu um erro inesperado!'))
    }
  }, 1000) 
});

  const retorno = promesa
  .then( resolucao => {
    resolucao.profissao = 'developer web'; //adicionando objeto no retorno
    return resolucao;
  })
  .then(resolucao => {
  console.log(resolucao)
}).catch((rejeitada) => {
  console.log(rejeitada);
})
console.log(retorno);


// PROMISE ALL
const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('usuario logado.')
  }, 1000)
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('dados carregados.')
  }, 1500)
})

const carregouTudo = Promise.all([login, dados]); //<= e necessario retornar os resolve no array para retonar tudo ao mesmo tempo
carregouTudo.then((resolucao) => {
  console.log(resolucao)
}) 
