const longestWord = (str) => {
  let words = str.split(" ");
  let longest = words[0];
  words.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}


let word = "Paket  lampu motor lakikai"
console.log(longestWord(word));
