/**
 * Tutorial Node.js
 * Entrada de dados via terminal
 * Aplicativo IMC
 */

const colors = require("colors");
const read = require("readline-sync");

console.clear();

console.log(" ___ __  __  ___");
console.log("|_ _|  \\/  |/ __|");
console.log(" | || |\\/| | (__");
console.log("|___|_|  |_|\\___|");
console.log(" ");

let nome = read.question("Digite o seu nome: ");
let peso = Number(read.question("Digite o seu peso (Kg): ").replace(",", "."));
let altura = Number(
  read.question("Digite a sua altura (m): ").replace(",", ".")
);
let imc = peso / (altura * altura);

console.log("");
console.log("-------------------------------");
console.log("Ficha do Aluno".italic.bold);
console.log(`Nome: ${nome}`);
console.log(`Peso: ${peso}`);
console.log(`Altura ${altura}`);
console.log(`IMC: ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log("Abaixo do peso".cyan);
} else if (imc >= 18.6 && imc < 24.9) {
  console.log("Peso Ideal".green);
} else if (imc >= 25 && imc < 29.9) {
  console.log("Levemente Acima do Peso".yellow);
} else if (imc >= 30 && imc < 34.9) {
  console.log("Obesidade Grau I".magenta);
} else if (imc >= 35 && imc < 39.9) {
  console.log("Obesidade Grau II".red);
} else if (imc >= 40) {
  console.log("Obesidade Grau III".bgRed.italic.bold);
}

//console.log(typeof nome);
