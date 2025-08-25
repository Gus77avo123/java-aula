/*
===========================================================
Exercícios Práticos - Estruturas de Decisão (if, else, switch)
===========================================================
*/

// 1. Crie uma variável `idade` e use um `if` para exibir "Maior de idade" se idade >= 18.
let idade = 20;
if (idade >= 18) {      
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");      
}

// 2. Crie uma variável `hora` e use `if/else` para exibir "Bom dia" se hora < 12 e "Boa tarde" caso contrário.
let hora = 14;
if (hora < 12) {
    console.log("Bom dia");
} else {
    console.log("Boa tarde");
}

// 3. Crie uma variável `nota` e use `if/else if/else` para exibir: Excelente (>=9), Aprovado (>=7), Recuperação (>=5), Reprovado.
let nota = 8;
if (nota >= 9) {        
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Aprovado");    
} else if (nota >= 5) {       
    console.log("Recuperação");
} else {
    console.log("Reprovado");   
}

// 4. Crie uma variável `diaSemana` (1 a 7) e use `switch/case` para exibir o nome do dia correspondente.
let diaSemana = 3;  
switch (diaSemana) {
    case 1: console.log("Domingo"); break;
    case 2: console.log("Segunda-feira"); break;
    case 3: console.log("Terça-feira"); break;
    case 4: console.log("Quarta-feira"); break;
    case 5: console.log("Quinta-feira"); break;
    case 6: console.log("Sexta-feira"); break;
    case 7: console.log("Sábado"); break;
    default: console.log("Dia inválido");
}

// 5. Modifique o exercício anterior para usar `default` caso o valor da variável não seja de 1 a 7. (já incluso acima)

// 6. Crie uma variável `cor` e use `switch/case` para agrupar cores primárias e secundárias.
let cor = "azul";
switch (cor) {
    case "vermelho":
    case "azul":
    case "verde":
        console.log("Cor primária");
        break;
    case "amarelo":
    case "roxo":
    case "laranja":
        console.log("Cor secundária");
        break;
    default:
        console.log("Outra cor");
}

// 7. Crie um `if` que verifique se um número é positivo, negativo ou zero.
let numero = -5;
if (numero > 0) {
    console.log("Número positivo");
} else if (numero < 0) {
    console.log("Número negativo");
} else {
    console.log("Número é zero");
}

// 8. Crie um `if/else` que verifica se um usuário pode acessar um sistema com base em idade >= 18.
if (idade >= 18) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

// 9. Crie um `switch` que exiba uma mensagem diferente para cada mês do ano (1 a 12).
let mes = 2;
switch (mes) {
    case 1: console.log("Janeiro"); break;
    case 2: console.log("Fevereiro"); break;
    case 3: console.log("Março"); break;
    case 4: console.log("Abril"); break;
    case 5: console.log("Maio"); break;
    case 6: console.log("Junho"); break;
    case 7: console.log("Julho"); break;
    case 8: console.log("Agosto"); break;
    case 9: console.log("Setembro"); break;
    case 10: console.log("Outubro"); break;
    case 11: console.log("Novembro"); break;
    case 12: console.log("Dezembro"); break;
    default: console.log("Mês inválido");
}

// 10. Crie um `if/else if/else` que classifica a velocidade de um veículo.
let velocidade = 95;
if (velocidade <= 40) {
    console.log("Devagar");
} else if (velocidade <= 80) {
    console.log("Moderado");
} else if (velocidade <= 120) {
    console.log("Rápido");
} else {
    console.log("Muito rápido");
}

// 11. Crie uma variável booleana `isAdmin` e use `if/else` para exibir se o usuário tem acesso ou não.
let isAdmin = true;
if (isAdmin) {
    console.log("Acesso concedido");
} else {
    console.log("Acesso negado");
}

// 12. Crie uma variável `temperatura` e use `switch`.
let temperatura = 4;
switch (temperatura) {
    case 0:
    case 1:
    case 2:
        console.log("Frio");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Agradável");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Quente");
        break;
    default:
        console.log("Desconhecido");
}

// 13. Crie um `if` que verifica se um número é par ou ímpar.
let numeroPar = 7;
if (numeroPar % 2 === 0) {  
    console.log("Número é par");
} else {
    console.log("Número é ímpar");
}

// 14. Crie um `switch` para exibir a estação do ano (1 a 4).
let estacao = 2;        
switch (estacao) {
    case 1: console.log("Verão"); break;
    case 2: console.log("Outono"); break;
    case 3: console.log("Inverno"); break;
    case 4: console.log("Primavera"); break;
    default: console.log("Estação desconhecida");
}

// 15. Crie um `if/else if/else` para classificar idade de uma pessoa.
let idadePessoa = 15;
if (idadePessoa >= 0 && idadePessoa <= 12) {            
    console.log("Criança");
} else if (idadePessoa <= 19) {
    console.log("Adolescente");
} else if (idadePessoa <= 59) {
    console.log("Adulto");
} else if (idadePessoa >= 60) {
    console.log("Idoso");
} else {
    console.log("Idade inválida");
}

// 16. Crie uma variável `saldo` e use `if`.
let saldo = -50;
if (saldo > 0) {
    console.log("Saldo positivo");
} else if (saldo < 0) {
    console.log("Saldo negativo");
} else {
    console.log("Saldo é zero");
}

// 17. Crie uma variável `letra` e use `switch` para verificar se é vogal ou consoante.
let letra = 'a';
switch (letra.toLowerCase()) {  
    case 'a': case 'e': case 'i': case 'o': case 'u':
        console.log("É uma vogal");
        break;
    default:
        console.log("É uma consoante");
}

// 18. Crie um `if/else` que verifica se um número está dentro de um intervalo (10 a 20).
let numeroIntervalo = 15;
if (numeroIntervalo >= 10 && numeroIntervalo <= 20) {   
    console.log("Número está dentro do intervalo");
} else {
    console.log("Número fora do intervalo");
}

// 19. Crie um `switch` para exibir mensagens diferentes para valores 1, 2, 3 e default.
let valor = 2;
switch (valor) {
    case 1: console.log("Valor é 1"); break;
    case 2: console.log("Valor é 2"); break;
    case 3: console.log("Valor é 3"); break;
    default: console.log("Outro valor");
}

// 20. Crie um `if` que verifica se um ano é bissexto.
let ano = 2024;
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log("Ano bissexto");
} else {
    console.log("Ano não bissexto");
}

// 21. Crie um `if/else` que verifica se uma string contém pelo menos 5 caracteres.
let palavra = "teste";
if (palavra.length >= 5) {
    console.log("String válida");
} else {
    console.log("String muito curta");
}

// 22. Crie duas variáveis `nota1` e `nota2` e use `if/else` para exibir se a média >= 7.
let nota1 = 6, nota2 = 9;
let media = (nota1 + nota2) / 2;
if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 23. Crie um `switch` que exiba o tipo de triângulo (1: Equilátero, 2: Isósceles, 3: Escaleno).
let tipoTriangulo = 2;
switch (tipoTriangulo) {
    case 1: console.log("Equilátero"); break;
    case 2: console.log("Isósceles"); break;
    case 3: console.log("Escaleno"); break;
    default: console.log("Tipo inválido");
}

// 24. Crie um `if/else` que verifica se uma variável `senha` corresponde à senha correta.
let senha = "12345";
if (senha === "12345") {
    console.log("Senha correta");
} else {
    console.log("Senha incorreta");
}

// 25. Crie um `switch` que exiba a quantidade de dias do mês (1 a 12).
let mesDias = 2;            
switch (mesDias) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("31 dias");
        break;
    case 4: case 6: case 9: case 11:
        console.log("30 dias");
        break;
    case 2:
        console.log("28 ou 29 dias (ano bissexto)");
        break;
    default:
        console.log("Mês inválido");
}

// 26. Crie um `if/else` que verifica se um número é múltiplo de 3, de 5, ou de ambos.
let n = 15;
if (n % 3 === 0 && n % 5 === 0) {
    console.log("Múltiplo de 3 e 5");
} else if (n % 3 === 0) {
    console.log("Múltiplo de 3");
} else if (n % 5 === 0) {
    console.log("Múltiplo de 5");
} else {
    console.log("Não é múltiplo de 3 nem de 5");
}

// 27. Crie um `switch` que retorna "Sim" para 1 e 2, "Não" para 3 e 4, e "Talvez" para outros.
let opcao = 4;
switch (opcao) {
    case 1:
    case 2:
        console.log("Sim");
        break;
    case 3:
    case 4:
        console.log("Não");
        break;
    default:
        console.log("Talvez");
}

// 28. Crie um `if` que verifica se uma variável `temperatura` está entre 18 e 25 graus.
let temp = 22;
if (temp >= 18 && temp <= 25) {
    console.log("Temperatura agradável");
} else {
    console.log("Temperatura fora da faixa");
}

// 29. Crie um `switch` que agrupe vários casos em uma mesma ação.
let corGrupo = "vermelho";
switch (corGrupo) {
    case "vermelho":
    case "laranja":
    case "amarelo":
        console.log("Cor quente");
        break;
    case "azul":
    case "verde":
    case "roxo":
        console.log("Cor fria");
        break;
    default:
        console.log("Outra cor");
}

// 30. Crie um `if/else` que combina duas condições (idade >= 18 e isAdmin = true).
if (idade >= 18 && isAdmin) {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}
