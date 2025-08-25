// 1. Declare duas variáveis numéricas e exiba a soma usando o operador `+`.
let num1 = 8;
let num2 = 15;      
console.log("Soma:", num1 + num2);

// 2. Declare duas variáveis numéricas e exiba a subtração usando o operador `-`.
console.log("Subtração:", num1 - num2);

// 3. Declare duas variáveis numéricas e exiba a multiplicação usando o operador `*`.
console.log("Multiplicação:", num1 * num2); 

// 4. Declare duas variáveis numéricas e exiba a divisão usando o operador `/`.
console.log("Divisão:", num1 / num2);   

// 5. Declare duas variáveis numéricas e exiba o resto da divisão usando `%`.
console.log("Resto da Divisão:", num1 % num2);

// 6. Declare duas variáveis numéricas e exiba a exponenciação usando `**`.
console.log("Exponenciação:", num1 ** 2);   

// 7. Use o operador de exponenciação `**` para calcular 2 elevado a 5.
console.log("2 elevado a 5:", 2 ** 5);  

// 8. Crie uma variável e use o operador `+=` para somar um valor a ela.
let total = 20;
total += 10;   

// 9. Crie uma variável e use o operador `-=` para subtrair um valor dela.
total -= 4; 
console.log("Total após subtração:", total);    

// 10. Crie uma variável e use o operador `*=` para multiplicar seu valor por outro.
total *= 3; 
console.log("Total após multiplicação:", total);    

// 11. Crie uma variável e use o operador `/=` para dividir seu valor por outro.
total /= 2; 
console.log("Total após divisão:", total);

// 12. Declare duas variáveis e use o operador `==` para comparar seus valores.
let a = 7;
let b = '7'; 
console.log("Comparação com == :", a == b); 

// 13. Declare duas variáveis e use o operador `===` para comparar valor e tipo.
console.log("Comparação com === :", a === b);  

// 14. Declare duas variáveis e use o operador `!=` para verificar se são diferentes (valores).
console.log("Verificação com != :", a != b); 

// 15. Declare duas variáveis e use o operador `!==` para verificar se são diferentes (valor e tipo).
console.log("Verificação com !== :", a !== b);  

// 16. Compare se uma variável é maior que outra usando `>`.
console.log("Verificação com > :", a > 5);  

// 17. Compare se uma variável é menor que outra usando `<`.
console.log("Verificação com < :", a < 5);     

// 18. Compare se uma variável é maior ou igual a outra usando `>=`.
console.log("Verificação com >= :", a >= 7); 

// 19. Compare se uma variável é menor ou igual a outra usando `<=`.
console.log("Verificação com <= :", a <= 6);   

// 20. Crie uma expressão com `&&` que só retorne verdadeiro se duas condições forem verdadeiras.
let cond1 = true;
let cond2 = false;  
console.log("Verificação com && :", cond1 && cond2); 

// 21. Crie uma expressão com `||` que retorne verdadeiro se pelo menos uma condição for verdadeira.
console.log("Verificação com || :", cond1 || cond2);     

// 22. Use o operador `!` para inverter o valor booleano de uma variável.
console.log("Inversão com ! :", !cond1); 
console.log("Inversão com ! :", !cond2);    

// 23. Use o operador ternário `condicao ? valor1 : valor2` para verificar se um número é par ou ímpar.
let numero = 11;
let resultado = (numero % 2 === 0) ? "Par" : "Ímpar";
console.log("Resultado do número:", resultado);     

// 24. Use o operador `typeof` para verificar o tipo de uma variável string.
let texto = "Olá, JavaScript!";
console.log("Tipo de texto:", typeof texto); 

// 25. Use o operador `typeof` para verificar o tipo de uma variável número.
let numeroExemplo = 99;
console.log("Tipo de número:", typeof numeroExemplo); 

// 26. Use o operador `typeof` para verificar o tipo de uma variável booleana.
let booleano = false;
console.log("Tipo de booleano:", typeof booleano);  

// 27. Crie um objeto e use o operador `delete` para remover uma de suas propriedades.
let pessoa = {
    nome: "Maria",
    idade: 25,
    cidade: "Rio de Janeiro"
};      
console.log("Propriedade 'nome' existe em pessoa:", "nome" in pessoa); 
delete pessoa.idade; 

// 28. Use o operador `in` para verificar se uma propriedade existe em um objeto.

// 29. Use o operador `instanceof` para verificar se um objeto é instância de uma função construtora.
console.log("pessoa é instância de Object:", pessoa instanceof Object);     

// 30. Crie uma operação com `??` para definir um valor padrão caso a variável seja `null` ou `undefined`.
let valor = undefined;
let valorPadrao = valor ?? "Valor Padrão";      
console.log("Valor padrão:", valorPadrao); 

// 31. Combine operadores aritméticos, lógicos e de comparação em uma expressão complexa e exiba o resultado.
console.log("Expressão complexa:", (num1 + num2 > 20 && num1 < 20) || (num2 === 15));
