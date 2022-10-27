function sistemaPE() {
  let nomeProduto = prompt("nome do produto ");
  let valorQuant = parseInt(prompt("quantidade do produto"));
  let preço = parseFloat(prompt("valor produto"));
  return [nomeProduto, valorQuant, preço]
};