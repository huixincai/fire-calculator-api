// function calculateFinancials(age, annualIncome, annualExpenses, currentNetWorth, rateOfReturn) {
//     let results = [];
//     let currentYear = new Date().getFullYear();

//     for (let i = 0; i < 30; i++) {  // Calculate for 30 years
//         let yearlyIncome = annualIncome;
//         currentNetWorth += yearlyIncome - annualExpenses + (currentNetWorth * (rateOfReturn / 100));
//         results.push({
//             year: currentYear + i, 
//             portfolioValue: currentNetWorth
//         });
//     }

//     return results;
// }

// module.exports = calculateFinancials;
