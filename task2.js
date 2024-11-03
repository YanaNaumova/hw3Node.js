const fs = require("fs");

fs.writeFile("info.txt", "Node.js is awesome!", "utf-8", (err) => {
  if (err) {
    console.error("Ошибка создания файла");
    return;
  }
  console.log("Файл info.txt создан");
});

fs.readFile("info.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("ошибка чтения файла");
    return;
  }
  console.log("файл прочитан", data);
});
