# Unit Test Vitest

This project demonstrates unit testing using Vitest, a fast test runner built for Vite. The focus is on testing JavaScript modules and functions to ensure they behave as expected. The project includes several JavaScript files with corresponding test files.

## Project Structure

The project is organized as follows:

### File Descriptions

- **app.js**: Entry point for the application.
- **index.html**: HTML file to serve the application.
- **package.json & package-lock.json**: Project dependencies and scripts.
- **src/**: Contains the source code and test files.
  - **math.js**: Module for mathematical functions.
  - **math.test.js**: Unit tests for `math.js`.
  - **parser.js**: Module for parsing functions.
  - **util/**: Utility modules.
    - **numbers.js**: Utility functions for number operations.
    - **numbers.test.js**: Unit tests for `numbers.js`.
    - **validation.js**: Utility functions for validation.
    - **validation.test.js**: Unit tests for `validation.js`.

## .test.js Files

### `math.test.js`

This file contains unit tests for the `math.js` module. The tests cover various mathematical functions to ensure they return correct results.

Example:

```javascript
import { describe, it, expect } from "vitest";
import { add, subtract } from "./math";

describe("math.js tests", () => {
  it("should add two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("should subtract two numbers correctly", () => {
    expect(subtract(2, 1)).toBe(1);
  });
});
```

### numbers.test.js`

This file includes unit tests for the numbers.js module, focusing on utility functions that perform various operations on numbers.

Example:

```javascript
import { describe, it, expect } from "vitest";
import { isEven, isOdd } from "./numbers";

describe("numbers.js tests", () => {
  it("should return true for even numbers", () => {
    expect(isEven(4)).toBe(true);
  });

  it("should return false for odd numbers", () => {
    expect(isEven(5)).toBe(false);
  });

  it("should return true for odd numbers", () => {
    expect(isOdd(5)).toBe(true);
  });

  it("should return false for even numbers", () => {
    expect(isOdd(4)).toBe(false);
  });
});
```

### validation.test.js

This file provides unit tests for the validation.js module, verifying various validation functions to ensure they operate correctly.

Example:

```javascript
import { describe, it, expect } from "vitest";
import { isValidEmail, isValidPassword } from "./validation";

describe("validation.js tests", () => {
  it("should validate email addresses correctly", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("invalid-email")).toBe(false);
  });

  it("should validate passwords correctly", () => {
    expect(isValidPassword("StrongPass1!")).toBe(true);
    expect(isValidPassword("weak")).toBe(false);
  });
});
```

## Running the Tests

To run the tests, follow these steps:

Install dependencies:

```javascript
npm install
```

Run the tests:

```javascript
npm test
```

The test results will be displayed in the terminal, showing which tests passed and which failed.

## Credits:

Special thanks to Maximilian Schwarzmüller and his Udemy courses.
