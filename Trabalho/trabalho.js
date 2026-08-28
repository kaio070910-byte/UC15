let num1 = 10;
let num2 = 5;

console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);
console.log("Divisão:", num1 / num2);
let numero = 7;

console.log("O dobro é:", numero * 2);
console.log("O triplo é:", numero * 3);
let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");

console.log(`Olá, ${nome}! Seja bem-vindo! Você tem ${idade} anos.`);
let nota1 = parseFloat(prompt("Nota 1:"));
let nota2 = parseFloat(prompt("Nota 2:"));
let nota3 = parseFloat(prompt("Nota 3:"));

let media = (nota1 + nota2 + nota3) / 3;

console.log(`Média: ${media}`);
let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let usuarioDigitado = prompt("Digite o usuário:");
let senhaDigitada = prompt("Digite a senha:");

if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    console.log("Login realizado com sucesso!");
} else if (usuarioDigitado !== usuarioCorreto) {
    console.log("Usuário incorreto.");
} else {
    console.log("Senha incorreta.");
}

let primeiroNumero = parseFloat(prompt("Digite o primeiro número:"));
let segundoNumero = parseFloat(prompt("Digite o segundo número:"));

if (primeiroNumero > segundoNumero) {
    console.log(`O maior número é ${primeiroNumero}.`);
} else if (segundoNumero > primeiroNumero) {
    console.log(`O maior número é ${segundoNumero}.`);
} else {
    console.log("Os dois números são iguais.");
}