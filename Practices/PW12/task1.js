let links = document.querySelectorAll("a");

for (let link of links) {
  let href = link.getAttribute("href");
  if (!href || !href.includes("://") || href.startsWith("http://task1.ru"))
    continue;
  link.style.color = "red";
}
