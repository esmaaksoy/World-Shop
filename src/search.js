import { showData, productDivs, search } from "../main.js";
export const searchCategory = (categoryData) => {
  search.addEventListener("input", () => {
    productDivs.innerHTML = "";
    const filteredData = categoryData.filter((item) =>
      item.title.toLowerCase().includes(search.value.toLowerCase())
    );
    showData(filteredData);
  });
};
