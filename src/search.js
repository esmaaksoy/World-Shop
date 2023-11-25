import { showData, products, search } from "../main.js";
export const searchCategory = (categoryData) => {
  search.addEventListener("input", () => {
    products.innerHTML = "";
    const filteredData = categoryData.filter((item) =>
      item.title.toLowerCase().includes(search.value.toLowerCase())
    );
    showData(filteredData);
  });
};
