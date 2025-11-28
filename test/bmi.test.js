const { hitungBMI, interpretasiBMI } = require('../src/BMIcalculator');

test('hitungBMI', () => {
    expect(hitungBMI(70, 1.7)).toBe(24.22);
});
