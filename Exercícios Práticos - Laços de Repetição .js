// =====================
// Exercícios Práticos - Laços de Repetição (for, while, do...while, forEach)
// =====================


// ---------- FOR ----------

// 1. Use um `for` para exibir os números de 1 a 10.
for (let i = 1; i <= 10; i++) console.log(i);

// 2. Use um `for` para exibir apenas os números pares de 0 a 20.
for (let i = 0; i <= 20; i += 2) console.log(i);

// 3. Crie um `for` que exiba a tabuada do 5 (de 1 até 10).
for (let i = 1; i <= 10; i++) console.log(`5 x ${i} = ${5 * i}`);

// 4. Use um `for` para somar todos os números de 1 a 100 e exiba o resultado.
let soma = 0;
for (let i = 1; i <= 100; i++) soma += i;
console.log(soma);

// 5. Crie um `for` que exiba os elementos de um array ["a", "b", "c", "d"].
let letras = ["a", "b", "c", "d"];
for (let i = 0; i < letras.length; i++) console.log(letras[i]);

// 6. Use um `for` para exibir os quadrados dos números de 1 a 10.
for (let i = 1; i <= 10; i++) console.log(i ** 2);

// 7. Crie um `for` que conte de 10 até 1 (contagem regressiva).
for (let i = 10; i >= 1; i--) console.log(i);

// 8. Crie um `for` que percorra um array de notas [7, 8, 5, 10] e exiba cada nota.
let notas = [7, 8, 5, 10];
for (let i = 0; i < notas.length; i++) console.log(notas[i]);

// 9. Crie um `for` que exiba apenas os múltiplos de 3 entre 1 e 30.
for (let i = 1; i <= 30; i++) if (i % 3 === 0) console.log(i);

// 10. Use um `for` para inverter e exibir os caracteres de uma string "JavaScript".
let texto = "JavaScript";
for (let i = texto.length - 1; i >= 0; i--) console.log(texto[i]);


// ---------- WHILE ----------

// 11. Crie um `while` que exiba os números de 1 a 10.
let i = 1;
while (i <= 10) { console.log(i); i++; }

// 12. Crie um `while` que exiba os números pares de 0 a 20.
i = 0;
while (i <= 20) { console.log(i); i += 2; }

// 13. Crie um `while` que conte de 10 até 1 (regressivo).
i = 10;
while (i >= 1) { console.log(i); i--; }

// 14. Crie um `while` que exiba os múltiplos de 5 de 0 até 50.
i = 0;
while (i <= 50) { console.log(i); i += 5; }

// 15. Crie um `while` que exiba a soma dos números de 1 a 100.
i = 1; soma = 0;
while (i <= 100) { soma += i; i++; }
console.log(soma);

// 16. Crie um `while` que percorra um array de nomes ["Ana", "Carlos", "João"] e exiba cada nome.
let nomes = ["Ana", "Carlos", "João"];
i = 0;
while (i < nomes.length) { console.log(nomes[i]); i++; }

// 17. Crie um `while` que exiba os números de 1 a 50, mas pule os múltiplos de 4.
i = 1;
while (i <= 50) { if (i % 4 !== 0) console.log(i); i++; }

// 18. Crie um `while` que exiba os dígitos de um número, por exemplo 123 → 1, 2, 3.
let numero = 123;
let numStr = numero.toString();
i = 0;
while (i < numStr.length) { console.log(numStr[i]); i++; }

// 19. Crie um `while` que exiba o fatorial de 5 (5! = 120).
let fatorial = 1; i = 5;
while (i > 0) { fatorial *= i; i--; }
console.log(fatorial);

// 20. Crie um `while` que calcule a média dos valores de um array [10, 20, 30, 40].
let valores = [10, 20, 30, 40];
i = 0; soma = 0;
while (i < valores.length) { soma += valores[i]; i++; }
console.log(soma / valores.length);


// ---------- DO...WHILE ----------

// 21. Crie um `do...while` que exiba os números de 1 a 10.
i = 1;
do { console.log(i); i++; } while (i <= 10);

// 22. Crie um `do...while` que exiba os números pares de 0 a 20.
i = 0;
do { console.log(i); i += 2; } while (i <= 20);

// 23. Crie um `do...while` que exiba os múltiplos de 7 até 70.
i = 7;
do { console.log(i); i += 7; } while (i <= 70);

// 24. Crie um `do...while` que exiba a contagem regressiva de 5 até 1.
i = 5;
do { console.log(i); i--; } while (i >= 1);

// 25. Crie um `do...while` que pergunte uma senha até que o usuário acerte ("1234").
// let senha;
// do { senha = prompt("Digite a senha:"); } while (senha !== "1234");

// 26. Crie um `do...while` que exiba a soma dos números de 1 a 50.
i = 1; soma = 0;
do { soma += i; i++; } while (i <= 50);
console.log(soma);

// 27. Crie um `do...while` que percorra os elementos de um array [2, 4, 6, 8] e exiba cada um.
let array = [2, 4, 6, 8];
i = 0;
do { console.log(array[i]); i++; } while (i < array.length);

// 28. Crie um `do...while` que exiba os números ímpares de 1 a 15.
i = 1;
do { if (i % 2 !== 0) console.log(i); i++; } while (i <= 15);

// 29. Crie um `do...while` que mostre os caracteres de uma string "Olá" um por um.
let palavra = "Olá";
i = 0;
do { console.log(palavra[i]); i++; } while (i < palavra.length);

// 30. Crie um `do...while` que simule uma contagem de vidas de um jogo (3 até 0).
let vidas = 3;
do { console.log(`Vidas: ${vidas}`); vidas--; } while (vidas >= 0);


// ---------- FOREACH ----------

// 31. Use `forEach` para exibir todos os elementos do array [1, 2, 3, 4].
[1, 2, 3, 4].forEach(num => console.log(num));

// 32. Use `forEach` para exibir cada nome em ["Ana", "João", "Maria"].
["Ana", "João", "Maria"].forEach(nome => console.log(nome));

// 33. Use `forEach` para exibir cada elemento e seu índice no array ["a", "b", "c"].
["a", "b", "c"].forEach((el, i) => console.log(`Índice ${i}: ${el}`));

// 34. Use `forEach` para exibir o dobro de cada número em [2, 4, 6, 8].
[2, 4, 6, 8].forEach(num => console.log(num * 2));

// 35. Use `forEach` para somar todos os números de [1, 2, 3, 4, 5] e exibir o total.
let total = 0;
[1, 2, 3, 4, 5].forEach(num => total += num);
console.log(total);

// 36. Use `forEach` para exibir apenas os números pares de [1, 2, 3, 4, 5, 6].
[1, 2, 3, 4, 5, 6].forEach(num => { if (num % 2 === 0) console.log(num); });

// 37. Use `forEach` para exibir a quantidade de caracteres de cada palavra em ["carro", "casa", "sol"].
["carro", "casa", "sol"].forEach(palavra => console.log(`${palavra}: ${palavra.length} letras`));

// 38. Use `forEach` para criar uma string com todos os elementos de ["JS", "é", "top"] separados por espaço.
let frase = "";
["JS", "é", "top"].forEach(palavra => frase += palavra + " ");
console.log(frase.trim());

// 39. Use `forEach` para calcular o quadrado de cada número em [1, 2, 3, 4].
[1, 2, 3, 4].forEach(num => console.log(num ** 2));

// 40. Use `forEach` para exibir a soma acumulada dos números de [10, 20, 30].
let somaAcumulada = 0;
[10, 20, 30].forEach(num => {
    somaAcumulada += num;
    console.log(somaAcumulada);
});
