const inflationRate = 0.03;

const calculateWithdrawal = (
  withdrawalRate,
  age,
  annualIncome,
  annualExpenses,
  currentNetWorth,
  realRateOfReturn
) => {
  let yearsToFI = 0;
  let yearlyData = [];
  let chartYear = new Date().getFullYear();

  const requiredSavings = annualExpenses / withdrawalRate;

  while (currentNetWorth < requiredSavings) {
    const annualSavings = annualIncome - annualExpenses;
    currentNetWorth += annualSavings + currentNetWorth * realRateOfReturn;
    
    yearlyData.push({
      age,
      annualIncome: Math.round(annualIncome),
      annualSavings: Math.round(annualSavings),
      netWorth: Math.round(currentNetWorth),
      chartYear: chartYear++,
    });

    annualExpenses *= 1 + inflationRate;
    yearsToFI++;
    age++;
  }

  return {
    yearsToFI,
    ageAtFI: age,
    requiredSavings,
    yearlyData,
  };
};

function calculateFIREResult(
  age,
  annualIncome,
  annualExpenses,
  currentNetWorth,
  nominalRateOfReturn
) {
  const realRateOfReturn =
    (1 + nominalRateOfReturn / 100) / (1 + inflationRate) - 1;

  const withdrawalRates = [0.03, 0.04, 0.05];

  return withdrawalRates.map((rate) =>
    calculateWithdrawal(
      rate,
      age,
      annualIncome,
      annualExpenses,
      currentNetWorth,
      realRateOfReturn
    )
  );
}

module.exports = {
  calculateFIREResult,
};
