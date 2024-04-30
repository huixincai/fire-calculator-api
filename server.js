const express = require('express');
const cors = require('cors');
const app = express();
const performFIRECalculation = require('./performFIRECalculation');


// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the FIRE Calculator API' });
});


app.post('/calculate', (req, res) => {
    const { age, annualIncome, annualExpenses, currentNetWorth, expectedRateOfReturn } = req.body;

    try {
        // Perform validation on the data (e.g., check for negative numbers, valid percentages, etc.)
        if (!age || !annualIncome || !annualExpenses || !currentNetWorth || !expectedRateOfReturn) {
            throw new Error('All input fields are required and must be valid numbers.');
        }

        const results = performFIRECalculation(age, annualIncome, annualExpenses, currentNetWorth, expectedRateOfReturn);
        res.json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
