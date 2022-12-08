let notifSection = document.querySelector(".notification-section");
function showNotification(options) {
  let div = document.createElement("div");
  div.className = "notification";

  notifSection.append(div);

  if (options) {
    div.textContent = options;
  }

  let closeBtn = document.createElement("button");
  closeBtn.innerHTML = "X";
  closeBtn.className = "close-btn";
  div.append(closeBtn);

  setTimeout(function () {
    div.remove();
  }, 4000);
}

var block = document.querySelector(".notification-section");
block.onclick = function (event) {
  let notification = event.target.closest(".close-btn");

  if (!notification || !block.contains(notification)) return;

  notification.parentElement.remove();
};

var cnt = 1;
createBtn.onclick = function () {
  showNotification("Уведомление №" + cnt);
  cnt++;
};
