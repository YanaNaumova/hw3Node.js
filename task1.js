const fs = require("fs");

fs.mkdir("myFolder", (err) => {
  if (err) {
    console.error("Ошибка создания директории", err);
    return;
  }
  console.log("Директория myFolder успешно создана");
  fs.rmdir("myFolder", (err) => {
    if (err) {
      console.error("при удалении директории возникли ошибки");
      return;
    }
    console.log("Директория myFolder успешно удалена");
  });
});
