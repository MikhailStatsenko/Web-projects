items.onclick = function (event) {
  if (event.target.tagName != "LI") return;

  if (event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);
  } else {
    singleSelect(event.target);
  }
};

function toggleSelect(listElement) {
  listElement.classList.toggle("selected");
}

function singleSelect(listElement) {
  let selected = items.querySelectorAll(".selected");
  for (let elem of selected) {
    elem.classList.remove("selected");
  }
  listElement.classList.add("selected");
}

items.onmousedown = function (event) {
  event.preventDefault();
};
