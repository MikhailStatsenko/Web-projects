thumbler.onmousedown = function (event) {
  let cordX = event.clientX - thumbler.getBoundingClientRect().left;

  document.addEventListener("mousemove", moveMouse);
  document.addEventListener("mouseup", onMouseUp);
  function moveMouse(event) {
    let changedLeft =
      event.clientX - cordX - slider.getBoundingClientRect().left;
    let borderRight = slider.offsetWidth - thumbler.offsetWidth;
    if (changedLeft < 0) changedLeft = 0;
    if (changedLeft > borderRight) changedLeft = borderRight;
    thumbler.style.left = changedLeft + "px";
  }
  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
  }
};
