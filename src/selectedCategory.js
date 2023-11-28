export const selectedCategory = (categories) => {
  const categoryArr = [
    "All",
    ...new Set(categories.map((item) => item.category)),
  ];

  const butons = document.querySelector("#btns");
  categoryArr.forEach((category, index) => {
    const btn = document.createElement("button");
    btn.innerText = category;
    btn.classList.add("btn", "btn-outline-primary");
    butons.appendChild(btn);
  });
};
