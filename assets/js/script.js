//PAGINA FORM

const urlProducts = `https://striveschool-api.herokuapp.com/api/product/`;
let products = [];
const myName = document.getElementById('name');
const brand = document.getElementById('brand');
const price = document.getElementById('price');
const imageUrl = document.getElementById('imageUrl');
const description = document.getElementById('description');
const btnSave = document.getElementById('btnSave');

const newProduct = {
    name: '',
    description: '',
    brand: '',
    imageUrl: '',
    price: 0,
};

async function postProducts() {
    try {
        let response = await fetch(urlProducts, {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjc3OWQyMjA3MTAwMTVkZTJmM2UiLCJpYXQiOjE3MzQwODAzNzcsImV4cCI6MTczNTI4OTk3N30.hImE9tqQIQhZfVqO6KxIKNjvO4pVLUcMO03ML5VoDV4",
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) throw new Error("Errore nella creazione del prodotto");
        console.log("Prodotto aggiunto con successo:", await response.json());
    } catch (error) {
        console.log("Errore durante l'aggiunta del prodotto:", error);
    }
}

async function getProducts() {
    try {
        let response = await fetch(urlProducts, {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjc3OWQyMjA3MTAwMTVkZTJmM2UiLCJpYXQiOjE3MzQwODAzNzcsImV4cCI6MTczNTI4OTk3N30.hImE9tqQIQhZfVqO6KxIKNjvO4pVLUcMO03ML5VoDV4",
            },
        });
        if (!response.ok) throw new Error("Errore nel recupero dei prodotti");
        products = await response.json();
        console.log("Prodotti recuperati:", products);
    } catch (error) {
        console.log("Errore durante il recupero dei prodotti:", error);
    }
}

btnSave.addEventListener('click', async (e) => {
    e.preventDefault();

    newProduct.name = myName.value;
    newProduct.description = description.value;
    newProduct.brand = brand.value;
    newProduct.imageUrl = imageUrl.value;
    newProduct.price = parseFloat(price.value); 
    console.log("Nuovo prodotto da inviare:", newProduct);

    await postProducts();
    await getProducts();
});
