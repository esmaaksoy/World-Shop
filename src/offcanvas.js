import { baskets, offcanvasBody, basketNumber } from "../main.js";
export const updateLocalStorage = () => {
  offcanvasBody.innerHTML = "";
  localStorage.setItem("shoppingCart", JSON.stringify(baskets));
  const basketCard = localStorage.getItem("shoppingCart");
  const basketProduct = JSON.parse(basketCard);
  basketProduct.forEach((item) => {
    const { image, title } = item;
    offcanvasBody.innerHTML += `
       <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4 my-auto">
          <img
            src="${item.image}"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <div class="d-flex align-items-center gap-2 iconButon" role="button">
              <i
                class="fa-solid fa-minus border rounded-circle bg-dark text-white p-2"
              ></i
              ><span class="fw-bold quantity">${item.quantity}</span>
              <i class="fa-solid fa-plus border bg-dark text-white rounded-circle p-2"
              ></i>
              <span class="price">${item.price}</span>
            </div>
            <p class="card-text h6 text-secondary">Total:<span class="total">${item.price}</span> $</p>
            <button class="btn btn-dark">Remove</button>
          </div>
        </div>
      </div>
    </div>`;
  });
  cardBody();
  totalCalculate();
};
const cardBody = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.classList.contains("fa-plus")) {
        event.target.previousElementSibling.innerText++;
        basketNumber.innerText++;
        calculateProductPric(event.target);
      } else if (event.target.classList.contains("fa-minus")) {
        if (event.target.nextElementSibling.innerText > 1) {
          event.target.nextElementSibling.innerText--;
          basketNumber.innerText--;
        }
        calculateProductPric(event.target);
      } else if (event.target.classList.contains("btn-dark")) {
        card.remove();
        calculateTotalPrice();
      }
    });
  });
};
const calculateProductPric = (e) => {
  const quantity = e.closest(".card").querySelector(".quantity");
  const price = e.closest(".card").querySelector(".price");
  const total = e.closest(".card").querySelector(".total");
  // price.textContent= price.textContent * quantity.textContent
  total.textContent = Number(quantity.textContent) * Number(price.textContent);
  calculateTotalPrice();
};

const calculateTotalPrice = () => {
  const prices = document.querySelectorAll(".total");
  const subtotal = [...prices].reduce(
    (sum, price) => sum + Number(price.textContent),
    0
  );
  document.querySelector(".totalPrice").innerText = subtotal;
};

window.addEventListener("load", () => {
  calculateTotalPrice();
});

document.querySelector(".basket").addEventListener("click",()=>{
 calculateTotalPrice()
})