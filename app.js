const minus = document.querySelectorAll(".fa-minus");

console.log(minus.nextElementSibling);

minus.forEach((i) => {
  console.log(minus);
  i.addEventListener("click", () => {
    console.log(i.parentElement.nextElementSibling);
    i.parentElement.nextElementSibling.innerText == "0"
      ? alert("ürün bulunmamaktadır")
      : (i.parentElement.nextElementSibling.innerText -= 1);
  });
});
