function formataTexto(texto) {
  return texto.toLowerCase().replace(/\s+/g, '-').replace(/\.+/g, '-');
}

document.getElementById('converter').addEventListener('click', function() {
  let valor = document.getElementById('texto').value;
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = formataTexto(valor);
});

document.getElementById('limpar').addEventListener('click', function() {
  document.getElementById('texto').value = '';
  document.getElementById('resultado').innerHTML = '';
});
