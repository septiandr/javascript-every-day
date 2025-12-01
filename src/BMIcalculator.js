function hitungBMI(berat, tinggi) {
  const bmi = berat / (tinggi * tinggi);
  return parseFloat(bmi.toFixed(2));
}

function interpretasiBMI(bmi) {
  if (bmi <= 18.5) {
    return "Kekurangan Berat Badan";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    return "Kelebihan berat badan";
  } else if (bmi >= 30) {
    return "Obesitas";
  }
}

module.exports = { hitungBMI, interpretasiBMI };
