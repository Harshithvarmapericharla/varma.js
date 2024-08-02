"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const math_1 = require("./math");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    const num1 = 10;
    const num2 = 5;
    const addition = (0, math_1.add)(num1, num2);
    const subtraction = (0, math_1.subtract)(num1, num2);
    const multiplication = (0, math_1.multiply)(num1, num2);
    const division = (0, math_1.divide)(num1, num2);
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
