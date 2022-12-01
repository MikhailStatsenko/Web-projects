crateList.onclick = function () {
  let ul = document.createElement("ul");
  document.querySelector(".list-section").append(ul);

  let value = prompt("Введите содержимое элемента списка");
  if (!value) return;

  while (value) {
    let li = document.createElement("li");
    li.textContent = value;
    ul.append(li);
    value = prompt("Введите содержимое элемента списка");
  }
};
