const reverseWordSentence =(sentence)=>{
    const word = sentence.split(" ")
    const reverseWord = word.reverse(). join(" ")
    return reverseWord
}

console.log(reverseWordSentence("Hello World"))