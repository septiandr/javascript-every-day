const text = "Hello, World!";

const arrayText = text.split(""); //change to array
console.log("🚀 ~ ArrayText:", arrayText);
//🚀 ~ ArrayText: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W','o', 'r', 'l', 'd','!']

const reversedArray = arrayText.reverse(); // reverse the array
console.log("🚀 ~ reversedArray:", reversedArray);
//🚀 ~ reversedArray: ['!', 'd', 'l', 'r', 'o', 'W', ' ', ',', 'o', 'l', 'l', 'e', 'H']

const reversedtext = reversedArray.join(""); // change from array to string
console.log("🚀 ~ ReversedText:", reversedtext);
//🚀 ~ ReversedText: !dlroW ,olleH

// using reduce
console.log(text);
const reversedTextUsingReduce = text
  .split("")
  .reduce((acc, val) => val + acc, "");
/*

*/
console.log("🚀 ~ ReversedTextUsingReduce:", reversedTextUsingReduce);
