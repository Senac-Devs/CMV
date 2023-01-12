var bd = openDatabase("cmvBD", "0.1", "Banco de Dados de Receitas", 4080);

bd.transaction(function (criar) {
    criar.executeSql("CREATE TABLE receita (igrediente TEXT, quantidade LONG, unidade TEXT)");
});

function salvarIgrediente() {
    const igredienteReceita = document.getElementById("nome-usuario").value.toUpperCase();
    const quantidadeIgrediente = parseInt(document.getElementById("idade-usuario").value);
    const unidadeIgrediente = document.getElementById("CPF-usuario").value;
    if (igredienteReceita === "" || unidadeIgrediente === "" || isNaN(quantidadeIgrediente)) {
        alert("Campos em brancos");
        return false;
    };
    bd.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO formulario (igrediente, quantidade, unidade) VALUES (?,?,?)",
            [igredienteReceita, quantidadeIgrediente, unidadeIgrediente, eMailUsuario, JSON.stringify(contatoUsuario)]
        );
    });
    document.getElementById("nome-usuario").value = "";
    document.getElementById("idade-usuario").value = "";
    document.getElementById("CPF-usuario").value = "";
    document.getElementById("email-usuario").value = "";
    document.getElementById("telefone-usuario").value = "";
};