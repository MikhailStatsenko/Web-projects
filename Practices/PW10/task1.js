function generateLetterCaptcha() {
  let len = Math.random() * 5 + 5;
  chrs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  for (var i = 0; i < len; i++) {
    let pos = Math.floor(Math.random() * chrs.length);
    result += chrs.substring(pos, pos + 1);
  }
  return result;
}

function generateNumberCaptcha() {
  num1 = Math.round(Math.random() * 20 + 1);
  num2 = Math.round(Math.random() * 20 + 1);
  return [num1 + num2, `${num1} + ${num2}`];
}

function isEmpty(obj) {
  for (let elem of obj) {
    return false;
  }
  return true;
}

const captchaText = document.querySelector(".form p");

var answer = generateLetterCaptcha();
var isAllowedToSend = false;
captchaText.innerHTML = answer;

function processInput() {
  var input = document.querySelector(".form .input-block input");
  var value = input.value;
  if (isEmpty(value)) {
    alert("Введите текст капчи");
  } else if (value == answer) {
    isAllowedToSend = true;
    let captchaBtn = document.getElementById("send-captcha");
    captchaBtn.innerHTML = "Верно!";
  } else {
    input.value = ""; // Очистка поля ввода
    alert("Введен ошибочный ответ");
    funcRes = generateNumberCaptcha();
    answer = funcRes[0];
    captchaText.innerHTML = funcRes[1];
  }
}

function sendForm() {
  if (isAllowedToSend) {
    let btn = document.getElementById("send-form");
    btn.innerHTML = "Отправлено!";
    btn.style.background = "rgb(83, 205, 81)";
  } else {
    alert("Сначала пройдите подтверждение выше!");
  }
}
