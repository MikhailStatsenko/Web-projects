var login, password;
login = prompt("Введите логин");

if (login == "Админ") {
  password = prompt("Введите пароль");
  if (password == "Я главный") {
    alert("Здравствуйте!");
  } else if (!password) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (!login) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
