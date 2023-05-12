const p_array = document.querySelector("#array");
const btnReduzir = document.querySelector("#btnReduzir");
const resultado = document.querySelector("#resultado");

const elementos_array=[1,2,3,4,5];
let ant=[];
let atu=[];
let dobro=[];

p_array.innerHTML = "[" + elementos_array + "]";
  dobro.push(elementos_array[0] * 2); //<= aparecer o primeiro numero na array
  atu.push(elementos_array[0]); //<= aparecer o primeiro numero na array

  btnReduzir.addEventListener('click', (evt) => {
    resultado.innerHTML = elementos_array.reduce((anterior, atual, pos) => {
    ant.push(anterior)
    atu.push(atual)
    dobro.push(atual*2) 
    return atual + anterior
  })
  resultado.innerHTML += "</br>V. Anterior: "+ant+"</br>V. Atual: "+atu+"</br>Dobro: "+dobro
})