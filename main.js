import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { selectedCategory } from "./src/selectedCategory.js";
import { searchCategory } from "./src/search.js";
export { showData, productDivs, search };
const productDivs = document.querySelector("#products");
const search = document.querySelector("#searchInput");
const butons = document.querySelector("#btns");
const categoryName = document.querySelector("#category");
const basketProduct = document.querySelector(".offcanvas-body");
const modalBody = document.querySelector(".modal-body");
let dataArray = [];
let baskets = [];
const getProducts = async () => {
  try {
    const res = await fetch(
      "https://anthonyfs.pythonanywhere.com/api/products/"
    );
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data = await res.json();
    dataArray = data;
    showData(data);
    selectedCategory(data);
  } catch (error) {
    console.log(error);
  }
};
getProducts();
const showData = (product) => {
  productDivs.innerHTML = "";
  product.forEach((item) => {
    const { id, title, description, price, image } = item;
    const productDiv = document.createElement("div");
    productDiv.classList.add("col");
    productDiv.setAttribute("id", id);
    productDiv.innerHTML = `
        <div class="card">
            <img src="${image}" class="p-2" height="250px" alt="...">
            <div class="card-body">
      <h5 class="card-title">${title}</h5>
              <p class="card-text line-clamp-2">${description}</p>
            </div>
            <div class="card-footer w-100 fw-bold d-flex justify-content-between gap-3">
            <span>Price:</span><span>${price} $</span>
                
            </div>
            <div class="card-footer w-100 d-flex justify-content-center gap-3">
                <button class="btn btn-primary">
                Add to Basket
                </button>
                <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                See Details
                </button>
            </div>
          </div>
        `;
    productDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-primary")) {
        addToCart(item);
      }else if (e.target.classList.contains("btn-dark")){
        showModal(item)
      }
    });
    productDivs.appendChild(productDiv);
  });
};
//!Selected Category Product
butons.addEventListener("click", (event) => {
  productDivs.innerHTML = "";
  if (event.target.textContent == "All") {
    categoryName.textContent = "All";
    showData(dataArray);
    searchCategory(dataArray);
  } else {
    const categoryData = dataArray.filter(
      (item) =>
        item.category.toUpperCase() == event.target.textContent.toUpperCase()
    );
    categoryName.textContent = event.target.textContent;
    showData(categoryData);
    searchCategory(categoryData);
  }
});

const addToCart=(product)=>{
if(baskets.some(item=>item.title === product.title)){
  baskets = baskets.map(item=>{
    return item.id === product.id ?{...item, quantity: item.quantity +1} : item;
  })
}else{
  baskets.push(product)
}
}
const showModal=(product)=>{
  fetch(`https://anthonyfs.pythonanywhere.com/api/products/${product.id}`)
  .then((res) => res.json())
  .then((res) => {
    modalBody.innerHTML = `<div class="text-center">
          <img src="${res.image}" class="p-2" height="250px" alt="...">
          <h5 class="card-title">${res.title}</h5>
          <p class="card-text">${res.description}</p>
          <p class="card-text">Price: ${res.price} $</p>
          </div>
          `;
  })
}