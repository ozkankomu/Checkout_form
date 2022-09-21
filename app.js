const minus = document.querySelectorAll(".fa-minus");
const plus = document.querySelectorAll(".fa-plus");
const remove = document.querySelectorAll(".remove");
const td = document.querySelectorAll(".td");
let subtotal = 0;
let totalsum = 0;

minus.forEach((i) => {
  i.addEventListener("click", () => {
    i.parentElement.nextElementSibling.innerText == "0"
      ? alert("Sepetinizde ürün bulunmamaktadır")
      : (i.parentElement.nextElementSibling.innerText -= 1);
    td.forEach((i) => {
      i.innerText = `${(
        i.closest("div").children[2].children[1].innerText *
        i.closest("div").children[1].children[0].innerText
      ).toFixed(2)}`;
    });
    sub();
    total();
  });
});

plus.forEach((i) => {
  i.addEventListener("click", () => {
    i.parentElement.previousElementSibling.innerText = `${
      Number(i.parentElement.previousElementSibling.innerText) + 1
    }`;
    td.forEach((i) => {
      i.innerText = `${(
        i.closest("div").children[2].children[1].innerText *
        i.closest("div").children[1].children[0].innerText
      ).toFixed(2)}`;
    });
    sub();
    total();
  });
});

document.querySelector(".section2").addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.parentElement.remove();
    sub();
    total();
  }
});

//! funtionss //////////////////////////////////

function total() {
  !subtotal ? (totalsum = 0) : (totalsum = subtotal * 1.18 + 20);
  document.querySelector(".sum").innerText = totalsum.toFixed(2);
}

function sub() {
  subtotal = 0;
  document.querySelectorAll(".td").forEach((i) => {
    subtotal += Number(i.innerText);
  });
  document.querySelector(".sub").innerText = Number(subtotal).toFixed(2);
}
