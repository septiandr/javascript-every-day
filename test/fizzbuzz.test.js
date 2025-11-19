const { fizzbuzz } = require("../src/fizzBuzz.js");

test("fizzbuzz function exists", () => {
  expect(typeof fizzbuzz).toBe("function");
});
