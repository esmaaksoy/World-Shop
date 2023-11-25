products.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-primary")) {
      document.querySelector("#sepet").textContent++;
    }
  });
};