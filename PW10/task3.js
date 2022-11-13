const allContent = document.querySelectorAll(
  ".glassmorphism-cards .card .card-content p"
);

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return `${str.slice(0, maxLength)}…`;
  } else {
    return str;
  }
}

allContent.forEach((content) => {
  let newContent = truncate(content.innerText, 149);
  content.innerHTML = newContent;
});
