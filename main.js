import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import { selectedCategory } from "./selectedCategory.js"

const getProducts = async()=>{
try {
  const res = await fetch("https://anthonyfs.pythonanywhere.com/api/products/")
 if(!res.ok){
  throw new Error(`Error: ${res.status}`)
 }
 const data = await res.json()
showData(data)
selectedCategory(data)
} catch (error) {
  console.log(error);
}
}
getProducts()

const showData=(product)=>{
  product.forEach(item=>{
    const {title,category,description,image,price} = item

   const products= document.querySelector("#products")
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
              <button class="btn btn-danger">Sepete Ekle</button>
              <button
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                See Details
              </button>
            </div>
          </div>
        </div> 
   `
  })

}

// document.querySelector("#electronics").addEventListener("click",()=>{
//   selectedCategory()
// })




