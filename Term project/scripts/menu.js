let menu = document.querySelector(".menu-wrapper .menu");
let button = document.querySelector(".menu-btn");
let lines = document.querySelectorAll(".menu-btn span");

menu.style.transform = "translateX(-100%)";

button.onclick = function () {
  if (menu.style.transform == "translateX(-100%)") {
    menu.style.transform = "translateX(0)";
    lines[0].style.opacity = "0";
    lines[1].style.transform = "translate(-50%, 10px) rotate(45deg)";
    lines[2].style.transform = "translate(-50%, -10px) rotate(-45deg)";
  } else {
    menu.style.transform = "translateX(-100%)";
    lines[0].style.opacity = "1";
    lines[1].style.transform = "translate(-50%, -50%)";
    lines[2].style.transform = "translate(-50%, -50%)";
  }
};
