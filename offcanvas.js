import { baskets,offcanvasBody } from "./main.js";
export const updateLocalStorage = ()=>{
    offcanvasBody.innerHTML = "";
    localStorage.setItem('shoppingCart', JSON.stringify(baskets));
    const basketCard = localStorage.getItem('shoppingCart');
    const basketProduct= JSON.parse(basketCard);
    basketProduct.forEach(item=>{
      const {image,title} = item
      offcanvasBody.innerHTML +=`
       <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4 my-auto">
          <img
            src="${item.image}"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <div class="d-flex align-items-center gap-2" role="button">
              <i
                class="fa-solid fa-minus border rounded-circle bg-dark text-white p-2"
              ></i
              ><span class="fw-bold">${item.quantity}</span>
              
              <i class="fa-solid fa-plus border bg-dark text-white rounded-circle p-2"
              ></i>
            </div>
            <p class="card-text h5">Total:${item.price} <span>$</span></p>
            <button class="btn btn-dark">Remove</button>
          </div>
        </div>
      </div>
    </div>`
    })
  
   }