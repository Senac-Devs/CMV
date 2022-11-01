let ingredientes = [];
let precos = [];
let tempoSalario = [];
let gastoadicional = [];
function registraIngrediente() {
    let ingrediente = document.getElementById("ingrediente").value;
    let quantidade = document.getElementById("quantidade").value;
    quantidade = string2Number(quantidade);
    if (!validaNumero(quantidade)) {
        alert("Quantidade inválida");
        return false
    }
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
    if (!validaNumero(quantidade)) {
        alert("Quantidade inválida");
        return false
    }
    let unidade = document.getElementById("unidade-compra").value;
    let preco = document.getElementById("preco-compra").value;
    preco = string2Number(preco);
    if (!validaNumero(preco)) {
        alert("Preço inválido");
        return false
    }
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

function registraTempoSalario() {
    let tempoTrabalhoHoras = document.getElementById("quantidade-tempo-trabalho-horas").value
    console.log(tempoTrabalhoHoras)
    tempoTrabalho = string2Number(tempoTrabalhoHoras)
    console.log(tempoTrabalhoHoras)
    let tempoTrabalhoMinutos = document.getElementById("quantidade-tempo-trabalho-minutos").value
    console.log(tempoTrabalhoMinutos)
    tempoTrabalho = string2Number(tempoTrabalhoMinutos)
    console.log(tempoTrabalhoMinutos)
    let salarioBase = document.getElementById("salario-base").value
    salarioBase = string2Number(salarioBase)
    tempoSalario.push([tempoTrabalho, salarioBase])
    document.getElementById("quantidade-tempo-trabalho-horas").value = ""
    document.getElementById("quantidade-tempo-trabalho-minutos").value = ""
    document.getElementById("salario-base").value = ""
    let valorHorasTrabalhado = tempoTrabalhoHoras / 220
    let valorMinutoTrabalhado = tempoTrabalhoMinutos / 13200
    let valorTempoTrabalhadoHora = valorHorasTrabalhado * salarioBase
    console.log(valorTempoTrabalhadoHora)
    let valorTempoTrabalhadoMinuto = valorMinutoTrabalhado * salarioBase
    console.log(valorTempoTrabalhadoMinuto)
    let valorTempoTotal = valorTempoTrabalhadoMinuto + valorTempoTrabalhadoHora
    console.log(valorTempoTotal.toFixed(2))
}
function registraNovoCusto() {
     let nomeCusto = document.getElementById("nomeCustoAdicional").value
     let quantidadeCusto = document.getElementById("quantidadenovoGasto").value
     let unidadeCusto = document.getElementById("unidadeGA").value
     let precoCusto = document.getElementById("valorGastoAdicional").value
    quantidadeCusto = string2Number(quantidadeCusto);
    if (!validaNumero(quantidadeCusto)) {
        alert("Quantidade inválida");
        return false
    }
    precoCusto= string2Number(precoCusto);
    if (!validaNumero(precoCusto)) {
        alert("Preço inválido");
        return false
    }
    gastoadicional.push([nomeCusto,quantidadeCusto,unidadeCusto, precoCusto]);
    console.log(gastoadicional)
    document.getElementById("nomeCustoAdicional").value = ""
    document.getElementById("quantidadenovoGasto").value = ""
    document.getElementById("unidadeGA").value = ""
    document.getElementById("valorGastoAdicional").value = ""
};