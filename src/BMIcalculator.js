const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function hitungBMI(berat, tinggi){
    
    return berat / (tinggi * tinggi);
    
}

function interpretasiBMI(bmi){
    if(bmi < 18.5){
        return "Kekurangan berat badan";
    } else if(bmi < 25){
        return "Normal";
    } else if(bmi < 30){
        return "Kelebihan berat badan";
    } else {
        return "Obesitas";
    }
}