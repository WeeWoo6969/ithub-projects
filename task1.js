/**Задача №1

В программе объявлены две переменные — price и range.
Переменная range может принимать одно из трех строковых значений — month/day/week. 
Переменная price хранит в себе числовое значение. 
Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону: 

<значение price> Р в <эквивалент значения range на русском языке> 

Пример значений переменных: 

let price = 10000 

let range = "day" 

Пример результата:

10000 Р в день */
const price = Number(prompt("Доход"));
const range = prompt("Укажите промежуток времени (month, day, week)");

const formattedprice = price.toLocaleString("ru", {
  style: "currency",
  currency: "RUB",
});

const result = `${formattedprice} per ${range}`;
console.log(result);
