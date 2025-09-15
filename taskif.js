/*const fonttype = "serif";
let message = "Type doesn't exist";
if (fonttype === "serif") {
  message("Выбран шрифт Times");
} else if (fonttype === "sans serif") {
  message("Выбран Aerial");
} else if (fonttype === "monospace") {
  message("Выбран Consolas");
} else {(message("Type doesn't exist"))}
console.log(message)**/
const fonttype = "serif";
let message = "Type doesn't exist";
switch (fonttype) {
  case "serif":
    message = "Выбран шрифт Times";
    break;
  case "sans serif":
    message = "Выбран Aerial";
    break;
  case "monospace":
    message = "Выбран Consolas";
    break;
  default:
    message = "Message type doesn't exist";
    break;
}
console.log(message);
