const countVowel = (str) => {
    let count = 0;
    let vowels =['a','i','u','e','o']
    forEach(vowels, (vowel) => {
        if(str.includes(vowel)){
            count++
        }
    })
}
