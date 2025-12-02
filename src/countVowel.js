const countVowel = (str) => {
    let count = 0;
    let vowels =['a','i','u','e','o']
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count
}

module.exports = countVowel
console.log(countVowel("Paket  lampu motor lakikai"));