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
        const { age, annualIncome, annualExpenses, currentNetWorth, expectedRateOfReturn, retirementYear } = req.body;

        try {
                // Perform validation on the data (e.g., check for negative numbers, valid percentages, etc.)
                if (!age || !annualIncome || !annualExpenses || !currentNetWorth || !expectedRateOfReturn || !retirementYear) {
                        throw new Error('All input fields are required and must be valid numbers.');
                }

                // Additional checks can be added here, for example:
                if (age < 0 || annualIncome < 0 || annualExpenses < 0 || currentNetWorth < 0 || expectedRateOfReturn <= 0 || retirementYear <= age) {
                        throw new Error('All numbers must be positive, rate of return must be greater than zero, and retirement year must be greater than age.');
                }

                const results = performFIRECalculation(age, annualIncome, annualExpenses, currentNetWorth, expectedRateOfReturn);

                // Generate chart data
                const chartData = [];
                for (let year = new Date().getFullYear(); year <= retirementYear; year++) {
                        chartData.push({
                                year: year,
                                netWorth: results.netWorth + (annualIncome - annualExpenses) * (year - age)
                        });
                }

                res.json(results, chartData);
        } catch (error) {
                res.status(400).json({ error: error.message });
        }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
});


// const express = require('express');
// const cors = require('cors');
// const app = express();
// const performFIRECalculation = require('./performFIRECalculation');

// const results = performFIRECalculation(age, annualIncome, annualExpenses, currentNetWorth, expectedRateOfReturn);
// console.log("Backend results:", results);  // Log the entire results object
// res.json(results);


// // Middleware
// app.use(cors());
// app.use(express.json());

// // Test route
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to the FIRE Calculator API' });
// });


// app.post('/calculate', (req, res) => {
//     const { age, annualIncome, annualExpenses, currentNetWorth, expectedRateOfReturn } = req.body;

//     try {
//         // Perform validation on the data (e.g., check for negative numbers, valid percentages, etc.)
//         if (!age || !annualIncome || !annualExpenses || !currentNetWorth || !expectedRateOfReturn) {
//             throw new Error('All input fields are required and must be valid numbers.');
//         }

//         // Additional checks can be added here, for example:
//         if (age < 0 || annualIncome < 0 || annualExpenses < 0 || currentNetWorth < 0 || expectedRateOfReturn <= 0) {
//             throw new Error('All numbers must be positive and rate of return must be greater than zero.');
//         }

//         const results = performFIRECalculation(age, annualIncome, annualExpenses, currentNetWorth, expectedRateOfReturn);
//         res.json(results);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });
// // Start server
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
