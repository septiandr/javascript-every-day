const findUniqeNumber = require("../src/findUniqeNumber.js");

test("function available", () => {
  expect(typeof findUniqeNumber).toBe("function");
});

test("type data return", () => {
  expect(Array.isArray(findUniqeNumber([1, 1, 2, 2, 5, 8, 8, 3, 1, 3, 9]))).toBe(
    true
  );
});

test("find uniqe number", () => {
  expect(findUniqeNumber([1, 1, 2, 2, 5, 8, 8, 3, 1, 3, 9])).toEqual([5, 9]);
});
