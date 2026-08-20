---
name: Feature Request
about: Suggest a new feature or enhancement for the calculator
title: ''
labels: enhancement
assignees: ''
---

## Feature Description

Add additional operations to the Node.js CLI calculator:
- modulo (remainder)
- exponentiation (power)
- square root

These should be available as new commands (e.g. `mod`, `%`, `pow`, `^`, `sqrt`) and integrated with the existing CLI and exported functions so they can be used programmatically and tested.

## Use Case

Developers and users often need quick access to modulo, exponentiation, and square-root calculations in shell scripts and one-off arithmetic tasks. Adding these operations makes the lightweight CLI calculator more useful for scripting and automation without requiring external tools.

## Proposed Solution

- Implement new pure functions: `mod(a, b)`, `pow(a, b)`, and `sqrt(a)` in `src/calculator.js` and export them.
- Add CLI aliases: `mod` and `%` for modulo, `pow` and `^` for exponentiation, `sqrt` and `√` for square root (unary, only one argument).
- Validate inputs (numeric checks, division/modulo by zero error handling, negative input handling for `sqrt`).
- Add unit tests under `src/tests/` for the new functions, including edge cases:
  - modulo with negative numbers
  - exponentiation with zero and negative exponents
  - square root of non-perfect squares and negative numbers (error or NaN policy)
- Update README with usage examples.

## Additional Context

Example CLI usage proposals:
- `node src/calculator.js mod 10 3` -> `1`
- `node src/calculator.js % 10 3` -> `1`
- `node src/calculator.js pow 2 8` -> `256`
- `node src/calculator.js ^ 2 8` -> `256`
- `node src/calculator.js sqrt 9` -> `3`

This enhancement complements the existing basic arithmetic operations and enables broader scripting use cases.
