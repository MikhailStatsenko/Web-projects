cart.onclick = function () {
  if (cart.classList.contains("flag-true")) {
    cart.classList.remove("flag-true");
    cart.classList.add("flag-false");
    cart.style = `
      margin-right: 14rem;
      background: none;
      border: none;
    `;
    cartBlock.style = `
      opacity: 1;
    `;
  } else {
    cart.classList.remove("flag-false");
    cart.classList.add("flag-true");
    cart.style = `
      margin-right: 2rem;
    `;
    cartBlock.style = `
      opacity: 0;
    `;
  }
};

function Accumulator(name, startingValue) {
  this.name = name;
  this.value = startingValue;
  this.read = function (num) {
    this.value = Number(this.value) + Number(num);
  };
}

var insideCart = []; // Массив объектов элементов карзины

function findItem(name) {
  for (const item of insideCart) {
    if (item.name == name) return item;
  }
}

function addItemToCart(name) {
  let item = document.querySelector(`#${name}`);
  let value = item.value;
  if (!value) return;
  value = value > 0 ? value : 0;

  let itemInsideCart = findItem(name);
  if (!itemInsideCart) {
    // В карзине нет такой позиции
    addNewItem(name);
  } else {
    addToValue(name, value); // Есть такая позиция
  }
  item.value = ""; // Очистка поля после ввода
}

// Позиция уже есть в корзине, нужно изменить количество
function addToValue(name, num) {
  let itemInsideCart = findItem(name);
  itemInsideCart.read(num);
  // itemInsideCart.value = Number(itemInsideCart.value) + Number(num);
  purchaseAmount = document.querySelector(
    `.cart .in-cart-block .in-cart .in-cart-element p span.${name}`
  );
  if (!purchaseAmount) return;

  // Удаление позиции из списка при количестве < 1
  if (purchaseAmount.innerHTML == "1 шт" && num < 0) {
    let toRemove = document.getElementById(`-${name}-`);
    toRemove.remove();
    let i = 0;
    for (; i < insideCart.length; i++) {
      if (insideCart[i].name == name) break;
    }
    if (i < insideCart.length) insideCart.splice(i, 1);
  }
  purchaseAmount.innerHTML = `${itemInsideCart.value} шт`;
}

// Позиции еще нет в корзине
const cartList = document.querySelector(".cart .in-cart-block .in-cart");

function addNewItem(name) {
  let item = document.querySelector(`#${name}`);
  insideCart.push(new Accumulator(name, item.value));

  let newPurchaseBlock = document.createElement("li");
  newPurchaseBlock.className = `in-cart-element`;
  newPurchaseBlock.id = `-${name}-`;
  cartList.append(newPurchaseBlock);

  let newPurchaseInfo = document.createElement("p");
  newPurchaseBlock.append(newPurchaseInfo);
  newPurchaseInfo.innerHTML = `${name}: `;

  let newPurchaseAmount = document.createElement("span");
  newPurchaseAmount.className = `${name}`;
  newPurchaseInfo.append(newPurchaseAmount);
  newPurchaseAmount.innerHTML = `${item.value} шт`;

  let btnBlock = document.createElement("div");
  btnBlock.className = "manip-btns";
  newPurchaseBlock.append(btnBlock);

  let subtractBtn = document.createElement("button");
  btnBlock.append(subtractBtn);
  subtractBtn.setAttribute("onclick", `addToValue("${name}", -1)`);
  subtractBtn.innerHTML = "-";

  let addBtn = document.createElement("button");
  btnBlock.append(addBtn);
  addBtn.setAttribute("onclick", `addToValue("${name}", 1)`);
  addBtn.innerHTML = "+";
}
