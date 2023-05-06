const coverterNumber = (e) => parseInt(e) //<= converter em numeros.
const dobrar = (e) => e * 2; //<= dobrar numeros.
let numeros = ["1", "2", "3", "4", "5"].map(dobrar);
console.log(numeros) 

// retonar os elementos no body em innerHTML ↴.
// let el = document.getElementsByTagName('div');
// const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML);
// console.log(val)

// let el = document.getElementsByTagName('div');
// el=[...el] //<= espread para retornar os elementos, em metodos que nao sao funcoes.
// el.map((e,i) => {
//   e.innerHTML="CFB Cursos" <= trocou as o conteudo das div por CFB Cursos
// })

// const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React',];
// let c = cursos.map((el, i) => {
//   return el;
// })
// console.log(c)