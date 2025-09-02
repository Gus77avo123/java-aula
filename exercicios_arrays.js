/*
===========================================================
Exercícios Práticos - Arrays
===========================================================
*/

// 1. Crie um array com 5 elementos e exiba o terceiro.
let frutas = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("1. Terceiro elemento:", frutas[2]); // Laranja

// 2. Adicione um elemento ao final do array.
frutas.push("Abacaxi");
console.log("2. Após adicionar Abacaxi:", frutas);

// 3. Remova o primeiro elemento do array.
frutas.shift();
console.log("3. Após remover o primeiro elemento:", frutas);

// 4. Use map para transformar todos os elementos em strings maiúsculas.
let frutasMaiusculas = frutas.map(item => item.toUpperCase());
console.log("4. Elementos em maiúsculas:", frutasMaiusculas);

// 5. Use filter para criar um novo array apenas com números pares.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let pares = numeros.filter(num => num % 2 === 0);
console.log("5. Números pares:", pares);

// 6. Use reduce para somar todos os números de um array.
let soma = numeros.reduce((total, valor) => total + valor, 0);
console.log("6. Soma dos números:", soma);

// 7. Use find para encontrar o primeiro elemento maior que 10.
let lista = [5, 8, 12, 3, 20];
let maiorQue10 = lista.find(num => num > 10);
console.log("7. Primeiro número maior que 10:", maiorQue10);

// 8. Ordene um array de números em ordem crescente.
let desordenado = [10, 3, 5, 1, 8];
desordenado.sort((a, b) => a - b);
console.log("8. Array ordenado:", desordenado);

// 9. Inverta a ordem dos elementos de um array.
desordenado.reverse();
console.log("9. Array invertido:", desordenado);

// 10. Faça a troca de valores entre dois índices usando destructuring.
let troca = [1, 2, 3, 4];
[troca[0], troca[3]] = [troca[3], troca[0]];
console.log("10. Array após troca:", troca);
