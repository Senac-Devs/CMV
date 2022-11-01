function reduzQuantidadePeso(quantidade, unidade) {
    console.log(quantidade, unidade);
    if (unidade.toUpperCase() === "MG") {
        return quantidade / 1000;
    } else if (unidade.toUpperCase() === "G") {
        return quantidade;
    } else if (unidade.toUpperCase() === "KG") {
        return quantidade * 1000;
    } else if (unidade.toUpperCase() === "L") {
        return quantidade * 1000;
    } else if (unidade.toUpperCase() === "ML") {
        return quantidade;
    } else if (unidade.toUpperCase() === "UND") {
        return quantidade;
    }
}
