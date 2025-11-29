const { hitungBMI, interpretasiBMI } = require('../src/BMIcalculator');

test('hitungBMI', () => {
    expect(hitungBMI(70, 1.7)).toBe(24.22);
});

test('interpretasiBMI', () => {
    expect(interpretasiBMI(24.22)).toBe("Normal");
});
