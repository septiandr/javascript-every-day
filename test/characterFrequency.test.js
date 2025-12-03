const characterFrequency = require('../characterFrequency');

test("available function", () => {
    expect(typeof characterFrequency).toBe("function")
})

test("character frequency", () => {
    expect(characterFrequency("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 })
})

test("character frequency", () => {
    expect(characterFrequency("hello world")).toEqual({ h: 1, e: 1, l: 3, o: 2, " ": 1, w: 1, r: 1, d: 1 })
})
