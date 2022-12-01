let img = document.querySelector(".img-block img");
let imgBlock = document.querySelector(".img-block");

function imageToCenter(img) {
  img.style.left = (img.parentElement.clientWidth - img.clientWidth) / 2 + "px";
  img.style.top =
    (img.parentElement.clientHeight - img.clientHeight) / 2 + "px";
}

window.onresize = function () {
  imageToCenter(img);
};

imgBlock.onclick = function (e) {
  x = e.clientX - imgBlock.offsetLeft;
  y = e.clientY - imgBlock.offsetTop;
  alert("X: " + x + "\n" + "Y: " + y);
};

changeImgSize.onclick = function () {
  cords = inputImgSize.value.split(" ");
  if (cords.length == 2) {
    img.style = `
    width: ${cords[0]}px;
    height: ${cords[1]}px`;
    imageToCenter(img);
    inputImgSize.value = "";
  } else {
    alert("Неверный формат данных");
  }
};

changeAreaSize.onclick = function () {
  cords = inputAreaSize.value.split(" ");
  if (cords.length == 2) {
    imgBlock.style = `
    width: ${cords[0]}px;
    height: ${cords[1]}px`;
    imageToCenter(img);
    inputAreaSize.value = "";
  } else {
    alert("Неверный формат данных");
  }
};

imageToCenter(img);
