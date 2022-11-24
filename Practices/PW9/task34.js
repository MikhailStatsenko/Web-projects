const button = document.querySelector(".buttons");
const i = button.querySelector(".fa-heart");
const block = document.querySelector(".page");
const drawnHearts = document.querySelector(".generated-hearts");
const btn = document.querySelector(".button.button");

btn.onclick = function () {
  if (btn.style.background == "rgb(229, 229, 229)") {
    btn.style.background = "rgb(255, 213, 213)";
    i.style.color = "rgb(255, 83, 83)";
  } else {
    btn.style.background = "rgb(229, 229, 229)";
    i.style.color = "rgb(104, 104, 104)";
  }
};

button.addEventListener("click", () => {
  if (button.classList.contains("flag-false")) {
    button.classList.remove("flag-false");
    button.classList.add("flag-true");
    block.addEventListener("mousemove", drawHeart);
  } else {
    button.classList.remove("flag-true");
    button.classList.add("flag-false");
    block.removeEventListener("mousemove", drawHeart);
    drawnHearts.innerHTML = "";
  }
});

function drawHeart(event) {
  let x = event.pageX;
  let y = event.pageY;

  let heart = document.createElement("i");
  heart.className = "fa fa-heart";
  heart.style = `
    left: ${x}px;
    top: ${y - 25}px;
    font-size: 25px;
    position: absolute;
    color: rgb(255, 83, 83);
    `;
  drawnHearts.append(heart);
}
