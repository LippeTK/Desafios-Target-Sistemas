// Acredito que eu deveria ter recebido por e-mail, porém não recebi nenhum arquivo json ou xml para fonte de dados, então gerei números aleatórios e os coloquei na variável abaixo
const faturamentoDiario = [900, 1100, 800, 1200, 0, 0, 1500, 1200, 1300, 1000, 800, 1100, 1200, 900, 1300, 1400, 1000, 1100, 900, 800, 1200, 1400, 1300, 1100, 1000, 1200, 800, 900, 1500, 1400, 1300];

let menorFaturamento = faturamentoDiario[0];
let maiorFaturamento = faturamentoDiario[0];
let somaFaturamento = 0;
let diasAcimaDaMedia = 0;
let diasComFaturamento = 0;

for (let i = 0; i < faturamentoDiario.length; i++) {

  if (faturamentoDiario[i] < menorFaturamento) {
    menorFaturamento = faturamentoDiario[i];
  }if (faturamentoDiario[i] > maiorFaturamento) {
    maiorFaturamento = faturamentoDiario[i];
  }
  somaFaturamento += faturamentoDiario[i];

  if (faturamentoDiario[i] > 0) { //não conta os dias com 0 como dias de faturamento
    diasComFaturamento++;
  }
}

const mediaMensal = somaFaturamento / diasComFaturamento;
for (let i = 0; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] > mediaMensal) {
      diasAcimaDaMedia++;
    }
}

// imprime os resultados na tela
console.log("Menor valor de faturamento ocorrido em um dia do mês: " + menorFaturamento);
console.log("Maior valor de faturamento ocorrido em um dia do mês: " + maiorFaturamento);
console.log("Dias com faturamento acima da média: " + diasAcimaDaMedia);