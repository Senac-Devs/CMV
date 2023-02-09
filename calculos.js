function calculaCustos(receita, custo) {
    let valorTotal = 0;
    let mensagem = "";
    const listaReceita = [];
    for (let i = 0; i < receita.rows.length; i++) {
        listaReceita.push(receita.rows.item(i));
    }

    for (let i = 0; i < custo.rows.length; i++) {
        valorUnitario = custo.rows[i].preco / custo.rows[i].quantidade;
        console.log(valorUnitario);
        console.log(custo.rows[i].ingrediente);
        console.log(listaReceita);
        console.log(
            listaReceita.find((e) => e.igrediente == custo.rows[i].ingrediente)
        );
        valorItemReceita =
            valorUnitario *
            listaReceita.find((e) => e.igrediente == custo.rows[i].ingrediente)
                .quantidade;
        mensagem +=
            "ingrediente " +
            custo.rows[i].ingrediente +
            " custou R$ " +
            valorItemReceita.toFixed(2) +
            ".\n";
        valorTotal += valorItemReceita;
    }
    mensagem += "Valor Total = R$" + valorTotal.toFixed(2);
    alert(mensagem);
}
function converteUnidade(valor, unidade) {
    if (unidade == "und") {
        return [valor, unidade];
    } else if (unidade == "g") {
        return [valor, unidade];
    } else if (unidade == "kg") {
        return [valor * 1000, "g"];
    } else if (unidade == "mg") {
        return [valor / 1000, "g"];
    } else if (unidade == "ml") {
        return [valor, unidade];
    } else if (unidade == "l") {
        return [valor * 1000, "ml"];
    }
}
