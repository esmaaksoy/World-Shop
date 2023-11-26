import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { selectedCategory } from "./src/selectedCategory.js";
import { searchCategory } from "./src/search.js";
export { showData, products, search };
const products = document.querySelector("#products");
const search = document.querySelector("#searchInput");
const butons = document.querySelector("#btns");
const categoryName = document.querySelector("#category");
const basketProduct = document.querySelector(".offcanvas-body")
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
  product.forEach((item) => {
    const { title, category, description, image, price } = item;
    products.innerHTML += `
    <div class="col">
          <div class="card">
            <img
              src="${image}"
              class="p-2"
              height="250px"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title line-clamp-1">${title}</h5>
              <p class="card-text line-clamp-3">${description}</p>
            </div>
            <div
              class="card-footer w-100 fw-bold d-flex justify-content-between gap-3"
            >
              <span>Price:</span><span>${price} $</span>
            </div>
            <div class="card-footer w-100 d-flex justify-content-center gap-3">
              <button class="btn btn-primary">Add to Basket</button>
              <button
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                See Details
              </button>
            </div>
          </div>
        </div> 
   `;
  });
  products.addEventListener("click", (event) => {
    
    if (event.target.classList.contains("btn-primary")) {
      document.querySelector("#sepet").textContent++;
      basketProduct.innerHTML=`<div class="card mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4 my-auto">
          <img
            src="${}"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Product Name</h5>
            <div class="d-flex align-items-center gap-2" role="button">
              <i
                class="fa-solid fa-minus border rounded-circle bg-dark text-white p-2"
              ></i
              ><span class="fw-bold">1</span>
              
              <i class="fa-solid fa-plus border bg-dark text-white rounded-circle p-2"
              ></i>
            </div>
            <p class="card-text h5">Total: <span>$</span></p>
            <button class="btn btn-dark">Remove</button>
          </div>
        </div>
      </div>
    </div>`
    }
  });
};
butons.addEventListener("click", (event) => {
  products.innerHTML = "";
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

const getProperty=(product)=>{
  const {title,image,price}= product

}