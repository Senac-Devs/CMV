function reduzQuantidadePeso(quantidade, unidade) {
    if (unidade.toUpperCase() === "G") {
        return quantidade
    } else if (unidade.toUpperCase() === "KG")
        return (quantidade * 1000)
};