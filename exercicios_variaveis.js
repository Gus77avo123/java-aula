/*
===========================================================
Exercícios Práticos - Variáveis (var, let, const)
===========================================================
*/

// 1. Declare uma variável com `var` e atribua uma string com seu nome. Exiba no console.
var nome = "pedro";
console.log(nome);
// 2. Declare uma variável com `let` contendo um número e depois altere esse número para outro valor.
let numero = 20;
numero = 15;
console.log(numero);
// 3. Declare uma constante `const` com um array vazio. Adicione três elementos a esse array e exiba.
const meuArray = [];
meuArray.push(1, 2, 3);
console.log(meuArray);
// 4. Escreva um bloco `if` que declare uma variável `var` dentro dele. Exiba essa variável fora do bloco.
if (true) {
    var teste = "Sou var";
}
console.log(teste);
// 5. Escreva um bloco `if` que declare uma variável `let` dentro dele. Tente exibir essa variável fora do bloco (comente a linha que causa erro).
if (true) {
    let testeLet = "Sou let";
}
// 6. Tente redeclarar uma variável usando `var` no mesmo escopo. Faça o mesmo com `let` e observe o erro.
var x = 5;
var x = 10;
console.log(x)
// 7. Declare uma variável com `const` que contém um objeto com duas propriedades. Altere uma dessas propriedades e exiba o objeto.
const meuObjeto = { nome: "Micael", idade: 20 };
meuObjeto.idade = 21;
console.log(meuObjeto);
// 8. Declare uma variável com `let` sem inicializá-la. Depois atribua um valor e exiba.
let variavel;
variavel = "Agora valor";
console.log(variavel)
// 9. Demonstre hoisting declarando uma variável com `var` depois de usá-la (exiba antes da declaração).
console.log(hoist);
var hoist = "Hoisting";
// 10. Crie uma função que declare uma variável `var` dentro dela e tente acessar essa variável fora da função (explique o resultado).
function minhaFuncao() {
    var dentroFuncao = "dentro";
    console.log(dentroFuncao);
}
minhaFuncao();