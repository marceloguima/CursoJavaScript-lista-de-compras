import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item")
const mensagemDeErro = document.querySelector(".mensagem-erro");
const som = document.getElementById("som");
let contador = 0;

export function criarItemDaLista() {
   
    if (inputItem.value === "") {
        inputItem.style.border = "2px solid red";
        mensagemDeErro.style.display = "block";
        som.play();

        setTimeout(() => {
            inputItem.style.border = "black solid 1px";
            mensagemDeErro.style.display = "none";
        }, 2000);   
        return
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

inputCheckbox.addEventListener("click", function() {
    if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none"
        }
    }
)

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista)
    const dataCompleta = gerarDiaDaSemana()
   
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data")
    itemDaLista.appendChild(itemData)

   return itemDaLista;
}