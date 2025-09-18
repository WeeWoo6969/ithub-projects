
const price = Number(prompt("Доход"));
const range = prompt("Укажите промежуток времени (month, day, week)");
if (isNaN(price)) {
  throw new Error("Неверно указан доход");
}

if ((range != "month" && range != "day" && range != "week")) {
  throw new Error("Неверно указан промежуток");
}
const formattedprice = price.toLocaleString("ru", {
  style: "currency",
  currency: "RUB",
});

const result = `${formattedprice} per ${range}`;
console.log(result);
