function exibeBD() {
    bd.transaction(function (exibe) {
        exibe.executeSql(
            "SELECT * FROM receita",
            [],
            function (exibe, igredientes) {
                const tamanho = igredientes.rows.length;
                document.getElementById("lista-bd").innerHTML = "";
                let item;
                for (let i = 0; i < tamanho; i++) {
                    item = igredientes.rows.item(i);
                    document.getElementById(
                        "lista-bd"
                    ).innerHTML += `<option>${item.igrediente}</option >`;
                }
            }
        );
    });
}
exibeBD();
