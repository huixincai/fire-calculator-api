# FIRE Calculator Backend

## Overview

This is the backend service for the FIRE Calculator, handling all the business logic required to calculate financial independence and retire early metrics. It is designed to perform complex financial calculations based on user inputs received from the frontend.

## Features

- **API Endpoints**: Offers a RESTful API to receive user data and respond with precise financial calculations.
- **Financial Logic Implementation**: Contains sophisticated algorithms to calculate when a user can potentially achieve financial independence based on their savings rate, expected rate of return, and other financial parameters.
- **Error Management**: Robust error handling to manage and respond to incorrect input data efficiently.

## API Documentation

### `POST /api/calculate`

Calculates the year of possible retirement based on current financial input.

- **Body**:
  ```json
  {
    "age": 35,
    "annualIncome": 80000,
    "annualExpenses": 10000,
    "currentNetWorth": 20000,
    "expectedRateOfReturn": 3
  }
  ```
- **Response**:
  ```json
  [
    {
        "yearsToFI": 5,
        "ageAtFI": 40,
        "requiredSavings": 333333.3333333334,
        "yearlyData": [
            {
                "age": 35,
                "annualIncome": 80000,
                "annualSavings": 70000,
                "netWorth": 90000,
                "chartYear": 2024
            },
            ...
        ],
        "canFIRE": true,
        "chartYear": 2029,
        "withdrawalRate": 0.03
    },
    {
        "yearsToFI": 4,
        "ageAtFI": 39,
        "requiredSavings": 250000,
        "yearlyData": [
            {
                "age": 35,
                "annualIncome": 80000,
                "annualSavings": 70000,
                "netWorth": 90000,
                "chartYear": 2024
            },
            ...
        ],
        "canFIRE": true,
        "chartYear": 2028,
        "withdrawalRate": 0.04
    },
    {
        "yearsToFI": 3,
        "ageAtFI": 38,
        "requiredSavings": 200000,
        "yearlyData": [
            {
                "age": 35,
                "annualIncome": 80000,
                "annualSavings": 70000,
                "netWorth": 90000,
                "chartYear": 2024
            },
            ...
        ],
        "canFIRE": true,
        "chartYear": 2027,
        "withdrawalRate": 0.05
    }
  ]
  ```

## Tech Stack

- **Node.js**: For server-side logic.
- **Express**: For API routing and middleware.

## Installation

```bash
git clone https://github.com/huixincai/fire-calculator-api
cd fire-calculator-backend
npm install
npm start
```

## Screenshots

### Desktop:

![alt text](<images/capstone landing page - desktop.png>)

![alt text](<images/capstone calculator chart - desktop.png>)

![alt text](<images/capstone calculator table - desktop.png>)

![alt text](<images/capstone calculator WR - desktop.png>)

![alt text](<images/capstone fire tips - desktop.png>)

### Mobile:

![alt text](<images/capstone landing page - mobile.png>)

![alt text](<images/capstone calculator chart - mobile.png>)

![alt text](<images/capstone calculator table - mobile.png>)

![alt text](<images/capstone calculator WR - mobile.png>)

![alt text](<images/capstone fire tips - mobile.png>)
