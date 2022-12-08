thumbler.onmousedown = function (event) {
  event.preventDefault();
  let cordX = event.clientX - thumbler.getBoundingClientRect().left;

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
  function onMouseMove(event) {
    let changedLeft =
      event.clientX - cordX - slider.getBoundingClientRect().left;
    let borderRight = slider.offsetWidth - thumbler.offsetWidth;
    if (changedLeft < 0) changedLeft = 0;
    if (changedLeft > borderRight) changedLeft = borderRight;
    thumbler.style.left = changedLeft + "px";
  }
  function onMouseUp() {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }
};
