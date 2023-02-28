const fs = require('fs');

const jsonFile = fs.readFileSync('./faturamento.json');
const faturamentoDiario = JSON.parse(jsonFile);

let menorFaturamento = faturamentoDiario[0].valor;
let maiorFaturamento = faturamentoDiario[0].valor;
let somaFaturamento = 0;
let diasAcimaDaMedia = 0;
let diasComFaturamento = 0;

for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i].valor < menorFaturamento) {
    menorFaturamento = faturamentoDiario[i].valor;
  }
  if (faturamentoDiario[i].valor > maiorFaturamento) {
    maiorFaturamento = faturamentoDiario[i].valor;
  }
  somaFaturamento += faturamentoDiario[i].valor;

  if (faturamentoDiario[i].valor > 0) { //não conta os dias com 0 como dias de faturamento
    diasComFaturamento++;
  }
}

const mediaMensal = somaFaturamento / diasComFaturamento;
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i].valor > mediaMensal) {
    diasAcimaDaMedia++;
  }
}

console.log("Menor valor de faturamento ocorrido em um dia do mês: " + menorFaturamento);
console.log("Maior valor de faturamento ocorrido em um dia do mês: " + maiorFaturamento);
console.log("Dias com faturamento acima da média: " + diasAcimaDaMedia);
