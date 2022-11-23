var arr = ["Апельсин", "Яблоко", "Банан", "Арбуз", "Вишня"];

const output = document.querySelector(".block .output");

function arrToHTML() {
  output.innerHTML = "[ ";
  for (var i = 0; i < arr.length; i++) {
    if (i != arr.length - 1) {
      output.innerHTML += arr[i] + ", ";
    } else {
      output.innerHTML += arr[i];
    }
  }
  output.innerHTML += " ]";
}

shift.onclick = function () {
  arr.shift();
  arrToHTML();
};

swap.onclick = function () {
  index1 = document.getElementById("index1");
  index2 = document.getElementById("index2");
  i1 = index1.value;
  i2 = index2.value;
  index1.value = "";
  index2.value = "";
  if (!i1 || !i2) {
    alert("Должно быть введено 2 значения");
    return;
  } else if (i1 >= arr.length || i1 < 0 || i2 >= arr.length || i2 < 0) {
    alert(`Нужно ввести число от 0 до ${arr.length - 1}`);
    return;
  }
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  arrToHTML();
};

arrToHTML();
