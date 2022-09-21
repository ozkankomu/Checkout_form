const taxRate = 0.18;
const shippingPrice = 20;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  calculateCartPrice();
  //set items to LocalStorage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  //set items to sessionStorage
  //  sessionStorage.setItem("taxRate", taxRate);
  //  sessionStorage.setItem("shippingPrice", shippingPrice);
  //  sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const productsDiv = document.querySelector(".section2");
productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    console.log("minus btn is clicked!");
    if (
      event.target.parentElement.parentElement.querySelector(".adet")
        .innerText > 1
    ) {
      event.target.parentElement.parentElement.querySelector(".adet")
        .innerText--;
      calculateProductPrice(event.target);
      calculateCartPrice();
    } else {
      if (
        confirm(
          `${
            event.target.parentElement.parentElement.parentElement.querySelector(
              "h2"
            ).innerText
          } will be deleted. Do you confirm!!!`
        )
      ) {
        //remove
        event.target.parentElement.parentElement.parentElement.parentElement.remove();
        calculateCartPrice();
      }
    }
  } else if (event.target.classList.contains("fa-plus")) {
    console.log("plus btn is clicked!");
    event.target.parentElement.previousElementSibling.innerText++;
    calculateProductPrice(event.target);
    calculateCartPrice();
  } else if (event.target.className == "remove") {
    event.target.parentElement.parentElement.remove();
    calculateCartPrice();
  } else {
  }
});

const calculateProductPrice = (btn) => {
  const productInfoDiv = btn.parentElement.parentElement.parentElement;
  console.log(productInfoDiv);
  const price = productInfoDiv.querySelector(".strong").innerText;
  const quantity = productInfoDiv.querySelector(".adet").innerText;
  const productTotalDiv = productInfoDiv.querySelector(".td");
  productTotalDiv.innerText = (price * quantity).toFixed(2);
};

const calculateCartPrice = () => {
  const productsTotalPricesDivs = document.querySelectorAll(".td");
  //foreach ==> NodeList, Array
  //const productsTotalPricesDivs = [...document.getElementsByClassName("product-line-price")];

  let subtotal = 0;
  productsTotalPricesDivs.forEach((div) => {
    console.log(div);
    subtotal += parseFloat(div.innerText);
  });
  //console.log(subtotal);
  const taxPrice = subtotal * localStorage.getItem("taxRate");

  const shippingPrice = parseFloat(
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );

  console.log(shippingPrice);

  document.querySelector(".sub").innerText = subtotal.toFixed(2);
  document.querySelector(".tax").innerText = taxPrice.toFixed(2);
  document.querySelector(".ship").innerText = shippingPrice.toFixed(2);
  document.querySelector(".sum").innerText = (
    subtotal +
    taxPrice +
    shippingPrice
  ).toFixed(2);
};
