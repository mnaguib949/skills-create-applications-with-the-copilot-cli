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
 * Exit codes (CLI):
 *   0 - success
 *   2 - invalid arguments / usage error
 *   3 - runtime error (e.g., division by zero)
 */

// Pure functions for testing and reuse
function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  if (Number(b) === 0) {
    throw new Error('Division by zero');
  }
  return Number(a) / Number(b);
}

// CLI runner that uses the pure functions above
function usage() {
  console.error('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.error('Operations: add|+ , subtract|- , multiply|*|x , divide|/');
  process.exit(2);
}

function runCLI(argv = process.argv) {
  const [,, op, aStr, bStr] = argv;

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
      result = add(a, b);
      break;

    case 'subtract':
    case '-':
      // Subtraction
      result = subtract(a, b);
      break;

    case 'multiply':
    case '*':
    case 'x':
      // Multiplication
      result = multiply(a, b);
      break;

    case 'divide':
    case '/':
    case '÷':
      // Division
      try {
        result = divide(a, b);
      } catch (e) {
        console.error('Error: division by zero is not allowed.');
        process.exit(3);
      }
      break;

    default:
      console.error(`Error: unknown operation "${op}".`);
      usage();
  }

  // Print result to stdout
  console.log(result);
  return result;
}

// Only run CLI when executed directly
if (require.main === module) {
  runCLI(process.argv);
  process.exit(0);
}

// Export pure functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  runCLI,
};
