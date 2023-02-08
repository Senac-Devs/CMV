function calculaCustos(receita, custo) {
    for (let i = 0; i < custo.rows.length; i++) {
        if (custo.rows[i].unidade === "und") {
            valorReceitaUnd =
                (custo.rows[i].preco / custo.rows[i].quantidade) *
                receita.rows.find(
                    (e) => e.igrediente == custo.rows[i].ingrediente
                ).quantidade;
            console.log(custo.rows[i].ingrediente, valorReceitaUnd);
        } else if (custo.rows[i].unidade === "kg") {
            if (receita.rows[i].unidade === "kg") {
                valorReceitaKg =
                    (custo.rows[i].preco / custo.rows[i].quantidade) *
                    receita.rows[i].quantidade;
                console.log(valorReceitaKg);
            } else if (receita.rows[i].unidade === "g") {
                valorReceitaG =
                    (custo.rows[i].preco / custo.rows[i].quantidade / 1000) *
                    receita.rows[i].quantidade;
                console.log(valorReceitaG);
            } else if (receita.rows[i].unidade === "mg") {
                valorReceitaMg =
               ((custo.rows[i].preco / custo.rows[i].quantidade) / (1000 * 1000))
            }
        }
    }
}
