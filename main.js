import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
const searchInput = document.querySelector("#searchInput")

searchInput.addEventListener("input",()=>{
  getProducts()
})

const getProducts = async()=>{

try {
  const res = await fetch("https://anthonyfs.pythonanywhere.com/api/products/")
 if(!res.ok){
  throw new Error(`Error: ${res.status}`)
 }
 const data = await res.json()
showData(data)
} catch (error) {
  console.log(error);
}
}

getProducts()

const showData=(product)=>{
  product.forEach(item=>{
    const {title} = item
    console.log(title);
  })


}