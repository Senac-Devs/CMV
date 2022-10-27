let ingredientes = [];
let precos = [];
function registraIngrediente() {
    let ingrediente = document.getElementById("ingrediente").value;
    let quantidade = document.getElementById("quantidade").value;
    quantidade = string2Number(quantidade);
    let unidade = document.getElementById("unidade").value;
    ingredientes.push([ingrediente, quantidade, unidade]);
    console.log(ingredientes);
    document.getElementById("ingrediente").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("unidade").value = "";
    insereIngrediente(ingredientes);
}

function insereIngrediente(ingredientes) {
    let lista = document.getElementById("opcaoIngrediente");
    lista.innerHTML = "";
    for (let i = 0; i < ingredientes.length; i++) {
        lista.innerHTML +=
            '<option value="' +
            ingredientes[i][0] +
            '">' +
            ingredientes[i][0] +
            "</option>";
    }
}
function registraPreco() {
    let ingrediente = document.getElementById("opcaoIngrediente").value;
    let quantidade = document.getElementById("quantidade-compra").value;
    quantidade = string2Number(quantidade);
    let unidade = document.getElementById("unidade-compra").value;
    let preco = document.getElementById("preco-compra").value;
    preco = string2Number(preco);
    precos.push([ingrediente, quantidade, unidade, preco]);
    console.log(precos)
    document.getElementById("opcaoIngrediente").value = ""
    document.getElementById("quantidade-compra").value = ""
    document.getElementById("unidade-compra").value = ""
    document.getElementById("preco-compra").value = ""
}

function registraTempoDePreparo() {
    let tempoDePreparo = document.getElementById("tempoDePreparo").value;
    tempoDePreparo = Number(tempoDePreparo);
    document.getElementById("tempoDePreparo").value = "";
    document.getElementById("resultadoTempo").innerHTML = tempoDePreparo + " minutos.";
}

