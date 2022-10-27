function validaUnidadeMedida() {
    console.log("Escolha a unidade de medida:");
    console.log(`  1 - Produto(s) por unidade(s)
  2 - Volume (litro(l), mililitro(ml))
  3 - Massa (quilo(kg), grama(g), miligrama(mg))
  4 - Tempo (hora(h), minuto(min) e segundo(s))`);
    
    let unidade = parseInt(prompt("  ="));
    if (unidade === 1) {
        return qtdUnd();
    } else if (unidade === 2) {
        return volume();
    } else if (unidade === 3) {
        return massa();
    } else if (unidade === 4) {
        return tempo();
    };
};

function qtdUnd() {
    return "und";
};

function volume() {
    console.log("1- LITRO(l) ou 2- MILILITRO(ml)");
    let nomeUnidadeVolume = parseInt(prompt("="));
    if (nomeUnidadeVolume === 1) {
        return "l"
    } else if (nomeUnidadeVolume === 2) {
        return "ml"
    };
};

function massa() {
    console.log("1- QUILO(kg) ou 2- GRAMA(g) ou 3- MILIGRAMA(mg)");
    let nomeUnidadeMassa = parseInt(prompt("="));
    if (nomeUnidadeMassa === 1) {
        return "kg";
    } else if (nomeUnidadeMassa === 2) {
        return "g";
    } else if (nomeUnidadeMassa === 3) {
        return "mg";
    };
};

function tempo() {
    console.log("1- HORA(h) ou 2- MINUTO(min) ou 3 - SEGUNDO(s)");
    let nomeUnidadeTempo = parseInt(prompt("="));
    if (nomeUnidadeTempo === 1) {
        return "h";
    } else if (nomeUnidadeTempo === 2) {
        return "min";
    } else if (nomeUnidadeTempo === 3) {
        return "s";
    };
};

console.log(validaUnidadeMedida());