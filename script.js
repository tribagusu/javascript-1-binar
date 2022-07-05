// _soal 1

let firstNumber = prompt("input angka pertama");
let secondNumber = prompt("input angka kedua");
let hasilBagi = firstNumber / secondNumber;
let hasilKuadrat = Math.pow(firstNumber, secondNumber);

alert(`${firstNumber} dibagi ${secondNumber} adalah ${hasilBagi}`);
alert(`${firstNumber} kuadrat ${secondNumber}  adalah ${hasilKuadrat}`);

// _soal 3

let m = new Date();
let month = m.getMonth();

let y = new Date();
let year = y.getFullYear();

const tomorrow = new Date();
const yesterday = new Date();

tomorrow.setDate(tomorrow.getDate() + 1);
yesterday.setDate(yesterday.getDate() - 1);

// _soal 5

// let x = prompt("input karakter");
let jumlahKarakter = x.length;
// prompt("jumlah karakter " + x + " adalah " + jumlahKarakter);
