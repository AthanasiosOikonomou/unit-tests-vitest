import { it, expect, describe } from "vitest";
import { validateStringNotEmpty } from "./validation";
import { validateNumber } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should throw an error, if an empty string is provided", () => {
    const input = "";
    const validaitonFn = () => validateStringNotEmpty(input);
    expect(validaitonFn).toThrow();
  });
});
describe("validateNumber()", () => {
  it("should throw an error if a non-numeric value is provided", () => {
    const input = "1";
    const validaitonFn = () => validateNumber(input);
    expect(validaitonFn).toThrow();
  });
});
