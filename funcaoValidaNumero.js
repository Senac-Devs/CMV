function validaNumero(valor) {
    valor = parseFloat(valor)
    if (isNaN(valor) || valor <= 0) {
        return false;
    } else { return true; }
};
