/**
 * Tutorial Node.js
 * Tipagem Dinâmica
 */

console.log("________________________________________strings");
let nome = "Sérgio Campos";
console.log(typeof nome);
console.log(nome);
console.log(nome.replace("Sérgio", "Miguel"));
// dica .replace(",", ".")
// concatenação
console.log("Development: " + nome);
console.log(`Development: ${nome}`);

console.log("___________________________________________números");
let peso = 85;
let altura = 1.74;
console.log(typeof peso);
console.log(typeof altura);

let imc = peso / altura ** 2;
console.log(imc);
console.log(`IMC: ${imc.toFixed(2)}`);

// ATENÇÃO
console.log(10 / 0);
console.log("3" + 2);
console.log("3" - 2);
console.log("3" * 2);
console.log("3" / 2);
console.log("3x" - 2);
console.log(NaN === NaN);
console.log(0.5 + 0.5);
console.log(0.1 + 0.2);
console.log(0.1 + 0.7);

console.log("______________________________________________booleanos");
let sw = true;
console.log(`Chave: ${sw}`);

let lamp = !0;
console.log(typeof lamp);
console.log(`Lâmpada: ${lamp}`);

let lamp2 = !1;
console.log(typeof lamp);
console.log(`Lâmpada: ${lamp2}`);

console.log(sw && "Lâmpada Acesa");
