// app.ts
import express from 'express';
import { add, subtract, multiply, divide } from './math';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const num1 = 10;
    const num2 = 5;

    const addition = add(num1, num2);
    const subtraction = subtract(num1, num2);
    const multiplication = multiply(num1, num2);
    const division = divide(num1, num2);

    res.send(`
        <p>Addition: ${addition}</p>
        <p>Subtraction: ${subtraction}</p>
        <p>Multiplication: ${multiplication}</p>
        <p>Division: ${division}</p>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
