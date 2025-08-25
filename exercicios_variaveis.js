/*
===========================================================
Exercícios Práticos - Variáveis (var, let, const)
===========================================================
*/

// 1. Declare uma variável com `var` e atribua uma string com seu nome. Exiba no console.
var nome = "Gustavo";
console.log("Meu nome é", nome);

// 2. Declare uma variável com `let` contendo um número e depois altere esse número para outro valor.
let numero = 42;
console.log("Número inicial:", numero);
numero = 58;
console.log("Número alterado:", numero);

// 3. Declare uma constante `const` com um array vazio. Adicione três elementos a esse array e exiba.
const lista = [];
lista.push("Carla", "Marcos", "Fernanda");
console.log("Array:", lista);

// 4. Escreva um bloco `if` que declare uma variável `var` dentro dele. Exiba essa variável fora do bloco.
if (true) {
    var testeVar = "Texto dentro do if usando var";
}
console.log(testeVar);

// 5. Escreva um bloco `if` que declare uma variável `let` dentro dele. Tente exibir essa variável fora do bloco (comente a linha que causa erro).
if (true) {
    let testeLet = "Texto dentro do if usando let";
    console.log(testeLet);
}
// console.log(testeLet); // Erro: testeLet não existe fora do bloco

// 6. Tente redeclarar uma variável usando `var` no mesmo escopo. Faça o mesmo com `let` e observe o erro.
var x = 10;
var x = 25;
console.log("var redeclarado:", x);

let y = 7;
// let y = 12; // Erro: não pode redeclarar no mesmo escopo
console.log("let não pode ser redeclarado no mesmo escopo:", y);

// 7. Declare uma variável com `const` que contém um objeto com duas propriedades. Altere uma dessas propriedades e exiba o objeto.
const pessoa = { nome: "Lucas", idade: 30 };
pessoa.idade = 31;
console.log("Objeto pessoa:", pessoa);

// 8. Declare uma variável com `let` sem inicializá-la. Depois atribua um valor e exiba.
let cor;
cor = "Verde";
console.log("Cor:", cor);

// 9. Demonstre hoisting declarando uma variável com `var` depois de usá-la (exiba antes da declaração).
console.log("Valor de z antes da declaração:", z);
var z = 200;
console.log("Valor de z depois da declaração:", z);

// 10. Crie uma função que declare uma variável `var` dentro dela e tente acessar essa variável fora da função (explique o resultado).
function minhaFuncao() {
    var interna = "Variável visível apenas dentro da função";
    console.log(interna);
}
minhaFuncao();
// console.log(interna); // Erro: "interna" só existe dentro da função
