const {
  calculateFIREResult,
} = require("../services/calculationService");

const performFIRECalculation = (req, res) => {
  const {
    age,
    annualIncome,
    annualExpenses,
    currentNetWorth,
    expectedRateOfReturn,
  } = req.body;

  try {
    if (
      !age ||
      !annualIncome ||
      !annualExpenses ||
      !currentNetWorth ||
      !expectedRateOfReturn
    ) {
      throw new Error(
        "All input fields are required and must be valid numbers."
      );
    }

    if (
      age < 0 ||
      annualIncome < 0 ||
      annualExpenses < 0 ||
      currentNetWorth < 0 ||
      expectedRateOfReturn <= 0
    ) {
      throw new Error(
        "All numbers must be positive and rate of return must be greater than zero."
      );
    }

    const results = calculateFIREResult(
      age,
      annualIncome,
      annualExpenses,
      currentNetWorth,
      expectedRateOfReturn
    );

    res.json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  performFIRECalculation,
};
