const minus = document.querySelectorAll(".fa-minus");
const plus = document.querySelectorAll(".fa-plus");

minus.forEach((i) => {
  i.addEventListener("click", () => {
    i.parentElement.nextElementSibling.innerText == "0"
      ? alert("ürün bulunmamaktadır")
      : (i.parentElement.nextElementSibling.innerText -= 1);
  });
});

plus.forEach((i) => {
  i.addEventListener("click", () => {
    i.parentElement.previousElementSibling.innerText = `${
      Number(i.parentElement.previousElementSibling.innerText) + 1
    }`;
  });
});
