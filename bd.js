var bd = openDatabase("cmvBD", "0.1", "Banco de Dados de Receitas", 4080);

bd.transaction(function (criar) {
    criar.executeSql("CREATE TABLE receita (igrediente TEXT, quantidade LONG, unidade TEXT)");
});
bd.transaction(function (criar) {
    criar.executeSql("CREATE TABLE custo (produto TEXT, quantidade LONG, unidade TEXT)");
});

function registraIngrediente() {
    const igredienteReceita = document.getElementById("ingrediente").value.toUpperCase();
    const quantidadeIgrediente = parseFloat(document.getElementById("quantidade").value);
    const unidadeIgrediente = document.getElementById("unidade").value;
    if (igredienteReceita === "" || unidadeIgrediente === "" || isNaN(quantidadeIgrediente)) {
        alert("Campos em brancos");
        return false;
    };

    salvarReceita(igredienteReceita, quantidadeIgrediente, unidadeIgrediente);
    
    limparCamposReceitas();

    exibeBD()
};

function salvarReceita(igredienteReceita, quantidadeIgrediente, unidadeIgrediente){
bd.transaction(function (inserir) {
    inserir.executeSql(
        "INSERT INTO receita (igrediente, quantidade, unidade) VALUES (?,?,?)",
        [igredienteReceita, quantidadeIgrediente, unidadeIgrediente]
    );
});
};

function limparCamposReceitas(){
    document.getElementById("ingrediente").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("unidade").value = "";
};

function exibeBD() {
    bd.transaction(function (exibe) {
        exibe.executeSql("SELECT * FROM receita",[],
            function (exibe, igredientes) {
                const tamanho = igredientes.rows.length;
                document.getElementById("lista-bd").innerHTML = "";
                let item;
                for (let i = 0; i < tamanho; i++) {
                    item = igredientes.rows.item(i);
                    document.getElementById("lista-bd").innerHTML += `<p onclick= "ingredienteExibe('${item.igrediente}', ${item.quantidade},'${item.unidade}',)"> Igrediente: ${item.igrediente} Quantidade: ${item.quantidade} ${item.unidade}</p>`;
                }
            }

        );
    });
}

function registraPreco() {
    const precoProduto = document.getElementById("opcaoIngrediente").value.toUpperCase();
    const precoQuantidade = parseFloat(document.getElementById("quantidade-compra").value);
    const precoUnidade = document.getElementById("unidade-compra").value;
    if (precoProduto === "" || precoUnidade === "" || isNaN(precoQuantidade)) {
        alert("Campos em brancos");
        return false;
    };

    salvarPreco(precoProduto, precoQuantidade, precoUnidade);
    limparCamposCusto();
};

function salvarPreco(precoProduto, precoQuantidade, precoUnidade){
    bd.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO custo (produto, quantidade, unidade) VALUES (?,?,?)",
            [precoProduto, precoQuantidade, precoUnidade]
        );
    });
};

function limparCamposCusto(){
    document.getElementById("opcaoIngrediente").value = "";
    document.getElementById("quantidade-compra").value = "";
    document.getElementById("unidade-compra").value = "";
};