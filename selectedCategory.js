export const selectedCategory= (categories)=>{
    const uniqueCategories= categories.reduce( (accumulator, product) =>{
      if (!accumulator.includes(product.category)) {
        accumulator.push(product.category);
      }
      return accumulator;
    }, []);
      uniqueCategories.push("All");
      console.log(uniqueCategories);
  }
