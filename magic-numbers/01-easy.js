/**
 * Exercício 1: 
 * Refatore o código abaixo substituindo os números mágicos por constantes com nomes significativos.
 */

function calcularDesconto(valor) {
  if (valor > 100) {
    return valor * 0.1;
  }
  return valor * 0.05;
}

//Exercitando:

function calcularDesconto(valor) {
  if (valor > 100) {
    const descontoPadrao = 0.1;
    return valor * descontoPadrao;
  }
  return valor * (descontoPadrao/2);
}

calcularDesconto(200);

const precoFinal = calcularDesconto(200);
console.log(`Preço com desconto ${precoFinal}`)

