bell.style.borderRadius = "50%";

var timerId = setInterval(newNotification, 3000);

bell.onclick = function () {
  if (bell.style.borderRadius == "50%") {
    timerId = delay(newNotification, timerId, 3000, 10000);
    bell.style = `
    width: 15rem;
    height: 15rem;
    border-radius: 20px;
    `;
    bellIcon.style = `
    margin-left: 1.5rem;
    `;
    bellContent.style = `
    transition: color 0.37s 0.3s;
    color: black;
    `;
    indicator.style = `
    transform: scale(1.2);
    `;
  } else {
    bell.style = `
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    `;
    bellIcon.style = `
    margin-left: 0.2rem;
    `;
    bellContent.style = `
    height: 0rem;
    transition: color 0.1s;
    color: rgba(234, 229, 202);
    `;
    indicator.style = `
    transform: scale(1);
    `;
  }
};

const content = document.querySelector(".bell .bellContent");
const cnt = document.querySelector(".bell .indicator");

function newNotification() {
  cnt.innerHTML = Number(cnt.innerHTML) + 1;

  let newNotif = document.createElement("li");
  content.append(newNotif);
  newNotif.innerHTML = "Новое уведомление";
}

function delay(func, timerId, interval, delayTime) {
  clearInterval(timerId);

  return setTimeout(function () {
    setInterval(func, interval);
  }, delayTime);
}
