

const temp = Number(prompt("Temperature"));
const weather = prompt("Weather (clear/cloudy)");
if (isNaN(temp)) {
  throw new Error("Неверно указана температура");
}

if (weather != "clear" && weather != "cloudy") {
  throw new Error("Неверно указана погода");
}

let activity;
if (temp >= 25 && weather === "clear") {
  activity = "golf";
} else if ((temp >= 10 && temp <= 24) || weather === "cloudy") {
  activity = "Bowling";
} else {
  activity = "hiking";
}

let result = activity;

console.log(result);
