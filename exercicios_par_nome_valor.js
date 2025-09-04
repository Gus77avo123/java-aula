/*
===========================================================
Exercícios Práticos - Par Nome/Valor
===========================================================
*/

// 1. Declare uma variável string e exiba seu valor no console.
let saudacao = "Olá, mundo!";
console.log("1:", saudacao);

// 2. Crie um objeto com pelo menos 3 pares nome/valor e exiba uma das propriedades.
let pessoa = {
    nome: "Gustavo",
    idade: 32,
    cidade: "São Paulo"
};
console.log("2:", pessoa.nome);

// 3. Crie um array com 5 elementos e exiba o terceiro elemento.
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];
console.log("3:", frutas[2]);

// 4. Crie um objeto e adicione uma nova propriedade dinamicamente.
let carro = {
    marca: "Toyota",
    modelo: "Corolla"
};
carro.ano = 2025;
console.log("4:", carro);

// 5. Mostre como acessar um valor de um objeto usando colchetes e uma variável.
let chave = "cidade";
console.log("5:", pessoa[chave]);

// 6. Crie uma função que recebe um objeto e exibe as chaves e valores (usando for...in).
function exibirChavesValores(obj) {
    for (let key in obj) {
        console.log(`6: ${key} => ${obj[key]}`);
    }
}
exibirChavesValores(pessoa);

// 7. Declare um objeto aninhado (objeto dentro de objeto) e exiba um valor profundo.
let empresa = {
    nome: "Tech Solutions",
    endereco: {
        rua: "Av. Paulista",
        numero: 1000,
        cidade: "São Paulo"
    }
};
console.log("7:", empresa.endereco.rua);

// 8. Crie um array e mostre que o índice é o nome e o valor é o conteúdo.
let cores = ["Vermelho", "Azul", "Verde"];
cores.forEach((cor, index) => {
    console.log(`8: Índice ${index} => Valor ${cor}`);
});

// 9. Crie uma variável com escopo global e outra local dentro de função e mostre seus valores.
let globalVar = "Eu sou global";
function mostrarVariaveis() {
    let localVar = "Eu sou local";
    console.log("9: Dentro da função:", globalVar, "|", localVar);
}
mostrarVariaveis();
console.log("9: Fora da função:", globalVar);

// 10. Modifique o valor de uma propriedade de um objeto e exiba antes e depois.
console.log("10: Antes:", pessoa.nome);
pessoa.nome = "Carlos";
console.log("10: Depois:", pessoa.nome);
