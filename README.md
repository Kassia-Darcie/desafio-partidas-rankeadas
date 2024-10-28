# Desafio calculadora de partidas rankeadas

Projeto criado para o desafio de projeto do bootcamp GFT start - Lógica de programação da DIO, que consiste em criar um código em JavaScript para determinar o ranking de um herói baseado no seu saldo de vitórias. 

## Funcionalidades

O código executa as seguintes tarefas:

1. Recebe o número de vitórias e derrotas.
2. Calcula o saldo de vitórias.
3. Associa o Ranking de acordo com o saldo de vitórias:
   - Ferro: saldo <= 10
   - Bronze: saldo entre 11 e 20
   - Prata: saldo entre 21 e 50
   - Ouro: saldo entre 51 e 80
   - Diamante: saldo entre 81 e 90
   - Lendário: saldo entre 91 e 100
   - Imortal: saldo > 100
   
4. Exibe uma mensagem baseada no saldo de vitórias e ranking do herói no console.

   > O Herói tem de saldo de {victoryBalance} está no nível de {rankingLevel}
