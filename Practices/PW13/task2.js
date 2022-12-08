container.onclick = function (event) {
  let img = event.target.closest("img");

  if (!img) return;
  bigImg.src = img.src;
  event.preventDefault();
};
