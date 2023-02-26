const faturamentoMensal = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};
  
let totalFaturamento = 0;
  
// Calcula o total de faturamento mensal da distribuidora
for (let estado in faturamentoMensal) {
    totalFaturamento += faturamentoMensal[estado];
}
  
// Calcula o percentual de representação de cada estado
for (let estado in faturamentoMensal) {
    let percentual = (faturamentoMensal[estado] / totalFaturamento) * 100;
    if (estado === "Outros") {
      console.log("Outros estados representaram " + percentual.toFixed(2) + "% do faturamento mensal da distribuidora.");
    } else {
      console.log(estado + " representou " + percentual.toFixed(2) + "% do faturamento mensal da distribuidora.");
    }
}