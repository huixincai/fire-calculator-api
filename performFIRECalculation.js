function performFIRECalculation(age, annualIncome, annualExpenses, currentNetWorth, nominalRateOfReturn) {
    const inflationRate = 0.03; 
    const nominalRate = nominalRateOfReturn / 100;
  
    const realRateOfReturn = ((1 + nominalRate) / (1 + inflationRate)) - 1;
  
    const requiredSavings = annualExpenses * 25;

    let yearsToFI = 0;
  
    while (currentNetWorth < requiredSavings) {
   
      const annualSavings = (annualIncome - annualExpenses) * Math.pow(1 - inflationRate, yearsToFI);

      currentNetWorth += annualSavings + (currentNetWorth * realRateOfReturn);
      yearsToFI++;
    }
    const ageAtFI = parseInt(age) + yearsToFI;
  
    return { yearsToFI, ageAtFI, requiredSavings };
  }
  
  module.exports = performFIRECalculation;