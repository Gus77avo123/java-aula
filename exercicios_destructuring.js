// Exercícios Práticos - Destructuring

// 1. Pegar os dois primeiros valores de um array
const meuArray = [10, 20, 30, 40, 50];
const [primeiro, segundo] = meuArray;
console.log(primeiro, segundo); // 10 20

// 2. Extrair propriedades nome e idade de um objeto
const pessoa = { nome: 'Ana', idade: 25, cidade: 'São Paulo' };
const { nome, idade } = pessoa;
console.log(nome, idade); // Ana 25

// 3. Extrair propriedade inexistente com valor padrão
const { profissao = 'Desconhecida' } = pessoa;
console.log(profissao); // Desconhecida

// 4. Desestruturação aninhada para propriedades de um objeto dentro de outro
const pessoaCompleta = { nome: 'Carlos', endereco: { cidade: 'Rio de Janeiro', estado: 'RJ' } };
const { endereco: { cidade, estado } } = pessoaCompleta;
console.log(cidade, estado); // Rio de Janeiro RJ

// 5. Usar rest operator para coletar elementos restantes de um array
const [primeiroNum, segundoNum, ...restoNumeros] = meuArray;
console.log(restoNumeros); // [30, 40, 50]

// 6. Trocar valores de duas variáveis usando destructuring
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5

// 7. Desestruturar parâmetros de uma função (objeto)
function exibirInfo({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}
exibirInfo(pessoa); // Nome: Ana, Idade: 25

// 8. Desestruturar objeto aninhado em uma função
function exibirEndereco({ endereco: { cidade, estado } }) {
  console.log(`Cidade: ${cidade}, Estado: ${estado}`);
}
exibirEndereco(pessoaCompleta); // Cidade: Rio de Janeiro, Estado: RJ

// 9. Renomear variáveis com destructuring
const { nome: nomePessoa, idade: idadePessoa } = pessoa;
console.log(nomePessoa, idadePessoa); // Ana 25

// 10. Desestruturar array retornado por uma função
function retornarArray() {
  return [1, 2, 3, 4, 5];
}
const [um, dois, tres] = retornarArray();
console.log(um, dois, tres); // 1 2 3