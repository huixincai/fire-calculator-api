const express = require('express');
const cors = require('cors');
const app = express();
const performFIRECalculation = require('./performFIRECalculation');

app.use(cors());
app.use(express.json());

app.post('/calculate', (req, res) => {
    const { age, annualIncome, annualExpenses, currentNetWorth, expectedRateOfReturn } = req.body;

    try {
       
        if (!age || !annualIncome || !annualExpenses || !currentNetWorth || !expectedRateOfReturn) {
            throw new Error('All input fields are required and must be valid numbers.');
        }

        if (age < 0 || annualIncome < 0 || annualExpenses < 0 || currentNetWorth < 0 || expectedRateOfReturn <= 0) {
            throw new Error('All numbers must be positive and rate of return must be greater than zero.');
        }

        const results = performFIRECalculation(age, annualIncome, annualExpenses, currentNetWorth, expectedRateOfReturn);
        
        res.json(results);
    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

