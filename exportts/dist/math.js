"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
// mathOperations.ts
const add = (a, b) => {
    return a + b;
};
exports.add = add;
const subtract = (a, b) => {
    return a - b;
};
exports.subtract = subtract;
const multiply = (a, b) => {
    return a * b;
};
exports.multiply = multiply;
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};
exports.divide = divide;
