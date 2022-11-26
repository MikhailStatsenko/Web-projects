function backToTop() {
  let button = document.querySelector(".back-to-top");
  window.onscroll = function () {
    if (window.scrollY > document.documentElement.clientHeight) {
      button.style.opacity = "1";
    } else {
      button.style.opacity = "0";
    }
  };

  function goTop() {
    if (window.pageYOffset !== 0) {
      window.scrollBy(0, -35);
      setTimeout(goTop, 0);
    }
  }
  button.onclick = goTop;
}

backToTop();
