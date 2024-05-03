function withdrawlCalculation(age, annualIncome, annualExpenses, currentNetWorth, nominalRateOfReturn) {
    const inflationRate = 0.03;
    const nominalRate = nominalRateOfReturn / 100;
    const realRateOfReturn = ((1 + nominalRate) / (1 + inflationRate)) - 1;
    const requiredSavings = annualExpenses * (1/0.03);
  
    let yearsToFI = 0;

    while (currentNetWorth < requiredSavings ) { 
        const annualSavings = annualIncome - annualExpenses;
        currentNetWorth += annualSavings + (currentNetWorth * realRateOfReturn);
        annualExpenses *= (1 + inflationRate); 
        yearsToFI++;
    }
  
    const ageAtFI = parseInt(age) + yearsToFI;
    return {
        yearsToFI,
        ageAtFI,
        requiredSavings,
    };
  }

module.exports = withdrawlCalculation;
