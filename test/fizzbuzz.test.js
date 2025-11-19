const { fizzbuzz } = require("../src/fizzBuzz.js");

test("fizzbuzz function exists", () => {
  expect(typeof fizzbuzz).toBe("function");
});

test("fizbuzz kelipatan 3 return fizz", () => {
  expect(fizzbuzz(6)).toBe("Fizz")
})

test("fizbuzz kelipatan 5 return Buzz", () => {
  expect(fizzbuzz(10)).toBe("Buzz")
})

test("fizbuzz  15 return FizzBuzz", () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz")
})

test("negatif case: jika bukan kelipatan 5 harus return undefined", () => {
  expect(fizzbuzz(7)).toBeUndefined();  // 7 bukan kelipatan 5
});

test("negatif case: jika bukan kelipatan 3 harus return undefined", () => {
  expect(fizzbuzz(7)).toBeUndefined();  // 7 bukan kelipatan 3
});

test.each([
  [3, "Fizz"],
  [5, "Buzz"],
  [15, "FizzBuzz"],
  [7, undefined],
  [11, undefined],
])("fizzbuzz(%i) = %s", (input, output) => {
  expect(fizzbuzz(input)).toBe(output);
});



