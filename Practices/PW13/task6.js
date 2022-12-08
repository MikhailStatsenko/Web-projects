var frog = document.querySelector(".container img.frog");
var startPosFrog;
frog.style.left = 100 + "px";
frog.onclick = () => {
  startPosFrog = frog.style.left;
  startPosFrog = Number(startPosFrog.slice(0, startPosFrog.length - 2));

  animate({ timing: timing, draw: draw, duration: 1000 });

  function timing(time) {
    return time;
  }

  function draw(progress) {
    frog.style.left = startPosFrog + progress * 180 + "px";
    let time = 1000 * progress;
    frog.style.bottom = 0.001 * (-time * time) + time - 20 + "px";
  }
};

var bee = document.querySelector(".container img.bee");
var startPosBee;
bee.style.left = 400 + "px";
bee.onclick = () => {
  startPosBee = bee.style.left;
  startPosBee = Number(startPosBee.slice(0, startPosBee.length - 2));
  animate({ timing: timing, draw: draw, duration: 2500 });

  function timing(time) {
    return time;
  }

  function draw(progress) {
    bee.style.left = startPosBee + progress * 400 + "px";
    bee.style.top = Math.floor(Math.random() * 6) + 100 + "px";
  }
};

function animate({ timing, draw, duration }) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}
