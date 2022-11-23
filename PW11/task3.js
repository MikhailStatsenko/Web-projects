const elements = document.querySelectorAll(".block .element");

let arr = [];

for (element of elements) {
  arr.push(element.innerHTML);
}

function arrToHTML() {
  for (var i = 0; i < arr.length; i++) {
    elements[i].innerHTML = arr[i];
  }
}

ascendingSort.onclick = function () {
  arr.sort();
  arrToHTML();
};

function descendingComparator(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return 1;
  } else if (a.toLowerCase() > b.toLowerCase()) {
    return -1;
  } else {
    return 0;
  }
}

descendingSort.onclick = function () {
  arr.sort(descendingComparator);
  arrToHTML();
};
