//PAGINA PRODOTTI

const urlProducts = `https://striveschool-api.herokuapp.com/api/product/`;
let products = [];
const myName = document.getElementById("name");
const brand = document.getElementById("brand");
const price = document.getElementById("price");
const imageUrl = document.getElementById("imageUrl");
const description = document.getElementById("description");
const btnSave = document.getElementById("btnSave");

async function getProducts() {
  try {
    let response = await fetch(urlProducts, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjc3OWQyMjA3MTAwMTVkZTJmM2UiLCJpYXQiOjE3MzQwODAzNzcsImV4cCI6MTczNTI4OTk3N30.hImE9tqQIQhZfVqO6KxIKNjvO4pVLUcMO03ML5VoDV4",
      },
    });
    data = await response.json();
    products = data;
    console.log(data);
    printProducts();
  } catch (error) {
    console.log(error);
  }
}
getProducts();

const newProduct = {
  name: "",
  description: "",
  brand: "",
  imageUrl: "",
  price: 0,
};

/*newProduct.name = myName.value;
newProduct.description = description.value;
newProduct.brand = brand.value;
newProduct.imageUrl = imageUrl.value;
newProduct.price = price.value;*/

class Product {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}

console.log(newProduct);

function printProducts() {
  let row = document.getElementById("row");
  row.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let newProduct = new Product(
      products[i].name,
      products[i].description,
      products[i].brand,
      products[i].imageUrl,
      products[i].price
    );
    let colProduct = `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img src="${newProduct.imageUrl}" style="width: 100%" />
            <div class="card-body">
                <h5 class="card-title">${newProduct.name}</h5>
                <p class="card-text">
                ${newProduct.description}
                </p>
                <div
                class="d-flex justify-content-between align-items-center"
                >
                <div class="btn-group">
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary btnModify"
                    >
                    Modifica
                    </button>
                    <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    >
                    Scopri di più
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
    `;

    row.innerHTML += colProduct;
    const btnModify = document.querySelectorAll(".btnModify");

    btnModify[i].addEventListener("click", (e) => {
      e.preventDefault();
      let primoUrl = "home.html";
      let secondoUrl = `${primoUrl}?_id=${products[i]._id}`;
      window.location.href = secondoUrl;
      console.log("ciao");
    });
  }
  //console.log('ciao') qua ci arriva
}
