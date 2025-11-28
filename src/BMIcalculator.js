const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function hitungBMI(berat, tinggi){
    
    return berat / (tinggi * tinggi);
}