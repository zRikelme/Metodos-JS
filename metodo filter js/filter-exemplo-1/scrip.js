const dados = [
  {id: 15},
  {id: undefined},
  {id: null},
  {id: NaN},
  {id: 'TEXTO'},
  {id: 2.7},
  {id: 3},
  {id: -10},
  {},
]

const validos = dados.filter((element) => {
  if(typeof(element.id) === "string") {
    return true;
  }
  else {
    return false;
  }
})


const idades  = [19, 22, 33, 5, 18, 10];
const maior = idades.filter((val) => {
  if(val > 18) {
    return val;
  }
})

const menor = idades.filter((val) => {
  if(val < 18) {
    return val;
  }
})

console.log(idades)
console.log(menor)
console.log(maior)