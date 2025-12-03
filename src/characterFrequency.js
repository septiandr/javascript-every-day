function characterFrequency(str) {
  const frequency = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  return frequency;
}

module.exports = characterFrequency;