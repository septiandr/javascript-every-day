/*
Jika kelipatan 3 → "Fizz"

Jika kelipatan 5 → "Buzz"

Jika kelipatan 3 & 5 → "FizzBuzz"
*/
const fizzbuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  }
};
module.exports = { fizzbuzz };
