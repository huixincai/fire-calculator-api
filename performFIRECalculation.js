function performFIRECalculation(age, annualIncome, annualExpenses, currentNetWorth, nominalRateOfReturn) {
  const inflationRate = 0.03;
  const nominalRate = nominalRateOfReturn / 100;
  const realRateOfReturn = ((1 + nominalRate) / (1 + inflationRate)) - 1;
  const requiredSavings = annualExpenses * 25;

  let yearsToFI = 0;
  let yearlyData = [];
  let chartYear = 2024;

  while (currentNetWorth < requiredSavings ) { 
      const annualSavings = annualIncome - annualExpenses;
      currentNetWorth += annualSavings + (currentNetWorth * realRateOfReturn);

      yearlyData.push({
          age: parseInt(age) + yearsToFI,
          annualIncome: Math.round(annualIncome),
          annualSavings: Math.round(annualSavings),
          netWorth: Math.round(currentNetWorth),
          chartYear: chartYear++
      });
      annualExpenses *= (1 + inflationRate); 
      yearsToFI++;
  }

  const ageAtFI = parseInt(age) + yearsToFI;
  return {
      yearsToFI,
      ageAtFI,
      requiredSavings,
      yearlyData 
  };
}

module.exports = performFIRECalculation;
