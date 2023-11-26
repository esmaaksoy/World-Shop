export const selectedCategory= (categories)=>{
  const categoryArr = ["All", ...new Set(categories.map(item=> item.category))]
    // const uniqueCategories= categories.reduce( (accumulator, product) =>{
    //   if (!accumulator.includes(product.category)) {
    //     accumulator.push(product.category);
    //   }
    //   return accumulator;
    // }, ["All"]);
    const butons= document.querySelector("#btns")
categoryArr.forEach((category, index)=>{
  const btn = document.createElement("button")
  btn.innerText= category;
  btn.classList.add("btn",'btn-outline-primary')
  butons.appendChild(btn)
})
}


