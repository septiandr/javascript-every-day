const countVowel = require("../src/countVowel")

test("available function", () => {
    expect(typeof countVowel).toBe("function")
})

test("count vowel", () => {
    expect(countVowel("Paket  lampu motor lakikai")).toBe(10)
})

test("count vowel", () => {
    expect(countVowel("kamu nanya")).not.toBe(10)
})