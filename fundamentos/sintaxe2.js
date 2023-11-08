/**
 * Tutorial Node.js
 * Uso de chaves nas estruturas de controle
 */

// Nas estruturas de controle condicional e nos laços de repetições
// podemos omitir as chaves, porém só uma linha de código é vinculada

let media = 9;

if (media < 5) {
  console.log("REPROVADO");
  console.log("Não emitir certificado");
} else {
  console.log("APROVADO");
  console.log("Emitir certificado");
}

for (let numero = 1; numero <= 10; numero++) console.log(numero);
console.log("Node.js");
