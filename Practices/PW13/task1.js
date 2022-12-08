contents.onclick = function (event) {
  let target = event.target.closest("a");
  if (target && contents.contains(target)) {
    let wantToLeave = confirm(`Перейти по ссылке?`);
    if (!wantToLeave) event.preventDefault();
  }
};
