/*
===========================================================
Exercícios Práticos - Objetos (Resolução)
===========================================================
*/

// 1. Crie um objeto com 3 propriedades diferentes e exiba-o.
let pessoa = {
  nome: "Gustavo",
  idade: 32,
  cidade: "São Paulo"
};
console.log("1:", pessoa);

// 2. Acesse e exiba uma propriedade usando notação de ponto e colchetes.
console.log("2:", pessoa.nome);       // notação de ponto
console.log("2:", pessoa["cidade"]);  // notação de colchetes

// 3. Adicione uma nova propriedade ao objeto depois de criado.
pessoa.profissao = "Desenvolvedor";
console.log("3:", pessoa);

// 4. Remova uma propriedade do objeto.
delete pessoa.idade;
console.log("4:", pessoa);

// 5. Adicione um método que retorne uma string usando propriedades do objeto.
pessoa.apresentar = function() {
  return `Olá, meu nome é ${this.nome} e sou ${this.profissao}`;
};
console.log("5:", pessoa.apresentar());

// 6. Crie um objeto aninhado (objeto dentro de objeto) e exiba um valor interno.
let carro = {
  marca: "Tesla",
  modelo: "Model X",
  motor: {
    potencia: "500cv",
    tipo: "Elétrico"
  }
};
console.log("6:", carro.motor.tipo);

// 7. Itere sobre as propriedades do objeto e exiba cada par nome/valor.
for (let chave in pessoa) {
  console.log("7:", chave, "=", pessoa[chave]);
}

// 8. Clone um objeto usando spread e altere uma propriedade no clone.
let pessoaClone = { ...pessoa };
pessoaClone.nome = "Fernanda";
console.log("8: Original:", pessoa);
console.log("8: Clone:", pessoaClone);

// 9. Compare dois objetos com mesmo conteúdo e explique o resultado da comparação.
let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 2 };
console.log("9:", obj1 === obj2); 
// false → em JavaScript objetos são comparados por referência na memória, 
// não pelo conteúdo.

// 10. Congele um objeto com Object.freeze e tente alterar uma propriedade.
let config = { tema: "dark", versao: 1 };
Object.freeze(config);
config.tema = "light";  // não terá efeito
console.log("10:", config);
