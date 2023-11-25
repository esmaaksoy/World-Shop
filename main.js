import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import { selectedCategory } from "./selectedCategory.js"
const products= document.querySelector("#products");
const search = document.querySelector("#searchInput");
const butons= document.querySelector("#btns");
const categoryName = document.querySelector("#category");
let dataArray =[];
let baskets=[];
const getProducts = async()=>{
try {
  const res = await fetch("https://anthonyfs.pythonanywhere.com/api/products/")
 if(!res.ok){
  throw new Error(`Error: ${res.status}`)
 }
 const data = await res.json()
 dataArray= data
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
              <button class="btn btn-primary">Sepete Ekle</button>
              <button
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Detayları Gör
              </button>
            </div>
          </div>
        </div> 
   `
  })
products.addEventListener("click",(event)=>{
  if(event.target.classList.contains("btn-primary")){
    console.log("hi");
    document.querySelector("#sepet").textContent++
  }
})
}
butons.addEventListener("click", (event)=>{
   products.innerHTML =""
  if(event.target.textContent == "All"){
categoryName.textContent= "All"
showData(dataArray)
searchFonk(dataArray)
  }else{
  const categoryData = dataArray.filter(item => item.category.toUpperCase() == event.target.textContent.toUpperCase())
  categoryName.textContent=event.target.textContent
  showData(categoryData)
  searchFonk(categoryData)
  }
})

const searchFonk= (searchCategory)=>{
search.addEventListener("input",()=>{
  products.innerHTML="";
 const filteredData = searchCategory.filter(item=>item.title.toLowerCase().includes(search.value.toLowerCase()))
 showData(filteredData);
  })
  
}
