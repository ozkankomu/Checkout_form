const minus = document.querySelectorAll(".fa-minus");
const plus = document.querySelectorAll(".fa-plus");
const remove = document.querySelectorAll(".remove");
const td = document.querySelectorAll("table tr td");

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
  });
});

remove.forEach((i) => {
  i.addEventListener("click", () => {
    i.parentElement.parentElement.remove();
  });
});

document.querySelector(".section2").addEventListener("click", () => {
  let sum =
    Number(document.querySelector(".td1").innerHTML) +
    Number(document.querySelector(".td2").innerHTML) +
    Number(document.querySelector(".td3").innerHTML);

  document.querySelector(".subtotal").nextElementSibling.innerText =
    sum.toFixed(2);
  let totalsum = sum * 1.18 + 20;
  document.querySelector(".sum").innerText = totalsum.toFixed(2);
});
