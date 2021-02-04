let favs = Array.from(document.querySelectorAll(".fa-heart"));
let deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
let cards = Array.from(document.querySelectorAll(".card"));
let plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
let minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle"));
let totalPrice = document.querySelector(".total-price");

// Favourites Part

for (let fav of favs) {
  fav.addEventListener("click", function () {
    fav.style.color === "black"
      ? (fav.style.color = "red")
      : (fav.style.color = "black");
  });
}

// Delete Button
for (let i in deleteBtns) {
  deleteBtns[i].addEventListener("click", function () {
    cards[i].remove();
    total();
  });
}

// Add Quantitues

for (let plusBtn of plusBtns) {
  plusBtn.addEventListener("click", function () {
    plusBtn.nextElementSibling.innerHTML++;
    total();
  });
}

// Minus Quantitues
for (let minusBtn of minusBtns) {
  minusBtn.addEventListener("click", function () {
    minusBtn.previousElementSibling.innerHTML > 0
      ? minusBtn.previousElementSibling.innerHTML--
      : null;
    total();
  });
}

//Total Price

function total() {
  let qutes = Array.from(document.querySelectorAll(".qute"));
  let unitPrices = Array.from(document.querySelectorAll(".unit-price"));
  let s = 0;
  for (let i in unitPrices) {
    s = s + Number(unitPrices[i].innerHTML) * Number(qutes[i].innerHTML);
  }
  totalPrice.innerHTML = s;
  return totalPrice.innerHTML;
}
