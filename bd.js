var bd = openDatabase("cmvBD", "0.1", "Banco de Dados de Receitas", 4080);

bd.transaction(function (criar) {
    criar.executeSql(
        "CREATE TABLE receita (igrediente TEXT, quantidade LONG, unidade TEXT)"
    );
});
bd.transaction(function (criar) {
    criar.executeSql(
        "CREATE TABLE custo (ingrediente TEXT, preco LONG, quantidade LONG, unidade TEXT)"
    );
});

function registraIngrediente() {
    const igredienteReceita = document
        .getElementById("ingrediente")
        .value.toUpperCase()
        .trim();
    const quantidadeIgrediente = parseFloat(
        document.getElementById("quantidade").value
    );
    const unidadeIgrediente = document.getElementById("unidade").value;
    if (
        igredienteReceita === "" ||
        unidadeIgrediente === "" ||
        isNaN(quantidadeIgrediente)
    ) {
        alert("Campos em brancos");
        return false;
    }
    let [novaQuantidade, novaUnidade] = converteUnidade(
        quantidadeIgrediente,
        unidadeIgrediente
    );

    salvarReceita(igredienteReceita, novaQuantidade, novaUnidade);

    limparCamposReceitas();
}

function salvarReceita(
    igredienteReceita,
    quantidadeIgrediente,
    unidadeIgrediente
) {
    bd.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO receita (igrediente, quantidade, unidade) VALUES (?,?,?)",
            [igredienteReceita, quantidadeIgrediente, unidadeIgrediente]
        );
    });
}

function limparCamposReceitas() {
    document.getElementById("ingrediente").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("unidade").value = "";
}

function registraPreco() {
    const preco = document
        .getElementById("opcaoIngrediente")
        .value.toUpperCase()
        .trim();
    const quantidade = parseFloat(
        document.getElementById("quantidade-compra").value
    );
    const unidade = document.getElementById("unidade-compra").value;
    const ingrediente = document
        .getElementById("lista-bd")
        .value.toUpperCase()
        .trim();
    if (preco === "" || unidade === "" || isNaN(quantidade)) {
        alert("Campos em brancos");
        return false;
    }
    let [novaQuantidade, novaUnidade] = converteUnidade(quantidade, unidade);
    salvarPreco(ingrediente, preco, novaQuantidade, novaUnidade);
    limparCamposCusto();
}

function salvarPreco(ingrediente, preco, quantidade, unidade) {
    bd.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO custo (ingrediente, preco, quantidade, unidade) VALUES (?,?,?,?)",
            [ingrediente, preco, quantidade, unidade]
        );
    });
}

function limparCamposCusto() {
    document.getElementById("opcaoIngrediente").value = "";
    document.getElementById("quantidade-compra").value = "";
    document.getElementById("unidade-compra").value = "";
    document.getElementById("lista-bd").value = "";
}

function calculo() {
    bd.transaction(function (ler) {
        ler.executeSql("SELECT * FROM receita", [], function (ler, receita) {
            ler.executeSql("SELECT * FROM custo", [], function (ler, custo) {
                calculaCustos(receita, custo);
            });
        });
    });
}
