const myName = document.getElementById("name");
const brand = document.getElementById("brand");
const price = document.getElementById("price");
const urlImage = document.getElementById("urlImage");
const description = document.getElementById("description");
const empty = document.getElementById("empty");
const formContent = document.getElementById("formContent");
let url = "https://striveschool-api.herokuapp.com/api/product/";
let data;
let productsList = [];

async function getFetch() {
  try {
    let response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjc3OWQyMjA3MTAwMTVkZTJmM2UiLCJpYXQiOjE3MzQwODAzNzcsImV4cCI6MTczNTI4OTk3N30.hImE9tqQIQhZfVqO6KxIKNjvO4pVLUcMO03ML5VoDV4",
      },
    });
    data = await response.json();
    productsList = data;
    console.log(data);
    if (productsList.length > 0) {
      printProducts();
    } else {
      empty.innerText = "Non sono state trovate corrispondenze";
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

getFetch();

/*class Product {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}*/

/*async function postFetch() {
  const newProduct = {
    name: "",
    description: "",
    brand: "",
    imageUrl: "",
    price: 0,
  };
  newProduct.name = myName.value;
  newProduct.description = description.value;
  newProduct.brand = brand.value;
  newProduct.imageUrl = urlImage.value;
  newProduct.price = parseFloat(price.value);
  console.log(newProduct);
  try {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjc3OWQyMjA3MTAwMTVkZTJmM2UiLCJpYXQiOjE3MzQwODAzNzcsImV4cCI6MTczNTI4OTk3N30.hImE9tqQIQhZfVqO6KxIKNjvO4pVLUcMO03ML5VoDV4",
      },
    });
    if (response.ok) {
      data = await response.json();
      productsList.push(data);
      //console.log(data);
    } else {
      throw new Error("not defined");
    }
  } catch (error) {
    console.log(error);
  }
}

postFetch();*/

function printProducts() {
  let row = document.getElementById("row");
  empty.innerText = "";
  row.innerHTML = "";
  productsList.forEach((product) => {
    let template = `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img src="${product.imageUrl}" style="width: 100%" />
        </a>
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
            </a>
                <p class="card-text">
                ${product.description}
                </p>
                <div
                class="d-flex justify-content-between align-items-center"
                >
                <div class="btn-group">
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onclick="fillImageInModal(this)"
                    >
                        <a href="home.html" class= "text-decoration-none text-black">Modify </a>
                    </button>
                    <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    onclick="hideColumn(this)"
                    >
                    <a href="description.html" class= "text-decoration-none text-black"> View More </a>
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
    `;
    row.innerHTML += template;
    console.log(product);
  });
  //console.log(data)
}
