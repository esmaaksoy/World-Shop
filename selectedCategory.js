export const selectedCategory= (categories)=>{
  const categoryArr = ["All", ...new Set(categories.map(item=> item.category))]
console.log(categoryArr);
    // const uniqueCategories= categories.reduce( (accumulator, product) =>{
    //   if (!accumulator.includes(product.category)) {
    //     accumulator.push(product.category);
    //   }
    //   return accumulator;
    // }, ["All"]);
    const butons= document.querySelector("#btns")
    // const btnColors=["primary","secondary","success","danger","warning","info"]
categoryArr.forEach((category, index)=>{
  const btn = document.createElement("button")
  btn.innerText= category.toUpperCase();
  btn.classList.add("btn",'btn-outline-primary')
  butons.appendChild(btn)
})

  }


