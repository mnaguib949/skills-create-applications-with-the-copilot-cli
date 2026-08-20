#!/usr/bin/env node
/**
 * CLI Calculator
 *
 * Supported operations:
 * - Addition (add, +)
 * - Subtraction (subtract, -)
 * - Multiplication (multiply, *, x)
 * - Division (divide, /)
 *
 * Usage examples:
 *   node src/calculator.js add 2 3
 *   node src/calculator.js + 4 5
 *
 * Exit codes:
 *   0 - success
 *   2 - invalid arguments / usage error
 *   3 - runtime error (e.g., division by zero)
 */

const [,, op, aStr, bStr] = process.argv;

function usage() {
  console.error('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.error('Operations: add|+ , subtract|- , multiply|*|x , divide|/');
  process.exit(2);
}

if (!op || aStr === undefined || bStr === undefined) {
  console.error('Error: missing arguments.');
  usage();
}

const a = Number(aStr);
const b = Number(bStr);

if (!Number.isFinite(a) || !Number.isFinite(b) || Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: both arguments must be valid numbers.');
  process.exit(2);
}

let result;
switch (op.toLowerCase()) {
  case 'add':
  case '+':
    // Addition
    result = a + b;
    break;

  case 'subtract':
  case '-':
    // Subtraction
    result = a - b;
    break;

  case 'multiply':
  case '*':
  case 'x':
    // Multiplication
    result = a * b;
    break;

  case 'divide':
  case '/':
  case '÷':
    // Division
    if (b === 0) {
      console.error('Error: division by zero is not allowed.');
      process.exit(3);
    }
    result = a / b;
    break;

  default:
    console.error(`Error: unknown operation "${op}".`);
    usage();
}

// Print result to stdout and exit 0
console.log(result);
process.exit(0);
