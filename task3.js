

const number = Number(prompt("Number A"));
const number2 = Number(prompt("Number B"));
const sign = prompt("Operation (*, /, +, -)");
let result;

if (isNaN(number)) {
  throw new Error("Неверно указан номер");
}
if (isNaN(number2)) {
  throw new Error("Неверно указан номер");
}

if (sign === "*") {
  result = number * number2
}
else if (sign === "/") {
  result = number / number2
}
else if (sign === "+") {
  result = number + number2
}
else if (sign === "-") {
  result = number - number2
}
else {throw new Error ("Неправильный знак")}

console.log(result);
