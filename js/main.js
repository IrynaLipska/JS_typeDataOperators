"use strict";
let sum = (0.1 * 10 + 0.2 * 10) / 10;
console.log(sum);

console.log(Number((0.1 + 0.2).toFixed(2)));

let num1 = "1";
let num2 = 2;
console.log(Number(num1) + num2);

console.log(+num1 + num2);

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const fileSize = 820;
let flashSize = prompt("Enter flash size in Gb", "");
alert(
  `You can fit on a flash ${Math.floor((flashSize * 1024) / fileSize)} files!`
);

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let totalMoney = Number(prompt("Enter the amount of money in your wallet:"));
let price = Number(prompt("Enter the price of one chocolate bar:"));

let chocolateCount = Math.floor(totalMoney / price);
let change = totalMoney % price;
alert(
  `You can buy ${chocolateCount} of chocolates, and your change will be ${change.toFixed(
    2
  )} uan.`
);

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

let num = Number(prompt("Enter a three-digit number:"));

let hundreds = Math.floor(num / 100);
let tens = Math.floor((num % 100) / 10);
let ones = num % 10;

let reversedNum = ones * 100 + tens * 10 + hundreds;

alert(`Inverse number is: ${reversedNum}`);
