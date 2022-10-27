function listarDespesas() {
    console.log("insira despesas com energia");
    energia = parseFloat(prompt(""));
    12

    console.log("insira despesas com agua");
    agua = parseFloat(prompt(""));

    console.log("insira despesas com gas");
    gas = parseFloat(prompt(""));

    console.log("insira despesas com material de limpeza");
    materialdelimpeza = parseFloat(prompt(""));
    return [energia, agua, gas, materialdelimpeza]
}
