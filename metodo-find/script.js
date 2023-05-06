const p_array = document.querySelector("#array");
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementos_array = ["html", "css", "javascript"]; //<= tambem podem ser usados numeros nessa pesquisa
p_array.innerHTML = "[" + elementos_array + "]";

btnPesquisar.addEventListener("click", (evt) => {
  resultado.innerHTML="valor não encontrado"
  const retorno = elementos_array.find((e,i) => {
    if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()) {
      resultado.innerHTML="valor pesuisado: " + e + " na posicão: " + i;
      return true; 
    }
  })
  console.log(retorno)
})
