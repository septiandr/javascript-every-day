const reverseWordSentence = require("../src/reverseWordSentence");

test(" function available", () => {
    expect(typeof reverseWordSentence).toBe("function")
})

test("reverse word sentence",() => {
    expect(reverseWordSentence("Halo nama saya")).toBe("saya nama halo")
})