//Projeto: Calculadora Interativa com Funções

//Objetivo: Criar uma calculadora simples com interface web que permita ao usuário realizar operações matemáticas básicas (adição, subtração, multiplicação, divisão) e exiba o resultado na tela.

function calcular(operacao, valor1, valor2) {
    switch (operacao) {
      case 'soma':
        return valor1 + valor2;
      case 'subtracao':
        return valor1 - valor2;
      case 'multiplicacao':
        return valor1 * valor2;
      case 'divisao':
        return valor1 / valor2;
      default:
        return 0;
    }
  }
  let resultado = calcular('soma', 10, 5);
  console.log(resultado); 

