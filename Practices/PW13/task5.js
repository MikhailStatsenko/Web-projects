container.onmousedown = function (event) {
  event.preventDefault();

  let target = event.target;
  let shiftX = event.clientX - target.getBoundingClientRect().left;
  let shiftY = event.clientY - target.getBoundingClientRect().top;

  target.hidden = true;
  let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
  target.hidden = false;

  currentDroppable = elemBelow.closest(".droppable");
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
  function onMouseMove(event) {
    let newLeft =
      event.clientX - shiftX - target.parentNode.getBoundingClientRect().left;
    let newTop =
      event.clientY - shiftY - target.parentNode.getBoundingClientRect().top;
    target.style = `
      top: ${newTop}px;
      left: ${newLeft}px;
    `;

    target.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    target.hidden = false;

    let droppableBelow = elemBelow.closest(".droppable");
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) leaveDroppable(target);

      currentDroppable = droppableBelow;
      if (currentDroppable) enterDroppable(target);
    }
  }

  function onMouseUp() {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }
};

function enterDroppable(target) {
  updatePrice(true, target);
}

function leaveDroppable(target) {
  updatePrice(false, target);
}

function updatePrice(isIncrease, target) {
  let number = Number(totalCost.innerHTML.split(" ")[0]);

  if (isIncrease) number += Number(target.dataset.cost);
  else number -= Number(target.dataset.cost);
  totalCost.innerHTML = `${number} руб.`;
}
