/*let ingredientes = [];
let precos = [];
let tempoSalario = [];*/
let custoTotal = 0;
function atualizaPrecoTotal() {
    for (let i = 0; i < ingredientes.length; i++) {
        console.log(ingredientes[i])

        for (let j = 0; j < precos.length; j++) {
            if (ingredientes[i][0] == precos[j][0]) {
                let quantidadeMinimaIngrediente = reduzQuantidadePeso(ingredientes[i][1], ingredientes[i][2])
                let quantidadeMinimaPreco = reduzQuantidadePeso(precos[j][1], precos[j][2])

                let precoMinimoIngrediente = precos[j][3] / quantidadeMinimaPreco
                let custoIngrediente = precoMinimoIngrediente * quantidadeMinimaIngrediente
                console.log(ingredientes[i][0],custoIngrediente)
                custoTotal += custoIngrediente
            }

        }
    }
    console.log(custoTotal)
}