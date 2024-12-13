class Product {
    constructor(_name, _description, _brand, _imageUrl, _price) {
      this.myName = _name;
      this.description = _description;
      this.brand = _brand;
      this.imageUrl = _imageUrl;
      this.price = _price;
    }
}
/*const newProduct = {
    name: myName.value,
    description: description.value,
    brand: brand.value,
    imageUrl: urlImage.value,
    price: parseFloat(price.value), 
};*/

async function postFetch() {
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
    /*const newProduct = {
        name: myName.value,
        description: description.value,
        brand: brand.value,
        imageUrl: urlImage.value,
        price: parseFloat(price.value), 
    };*/

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

        data = await response.json();
        productsList= data;
        //console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  postFetch();