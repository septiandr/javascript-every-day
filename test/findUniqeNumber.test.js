const findUniqeNumber = require("../src/findUniqeNumber.js");

test("function available", () => {
  expect(typeof findUniqeNumber).toBe("function");
});

test("find uniqe number", () => {
  expect(findUniqeNumber([1, 1, 2, 2, 5, 8, 8, 3, 1, 3, 9])).toBe([5, 9]);
});
