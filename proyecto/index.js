const API_URL = "https://fakestoreapi.com/products";
const PRODUCTS_CONTAINER = document.querySelector("#products");

async function getProducts() {
    try {
        // Realiza una solicitud a la API y espera la respuesta
        const response = await fetch(API_URL);
        
        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convierte la respuesta de la API a formato JSON
        const products = await response.json();

        // Limita a solo 10 productos
        const limitedProducts = products.slice(0, 10);

        // Mapea los productos limitados y crea elementos para cada uno
        limitedProducts.forEach((product) => {
            createProduct(product.image, product.title, product.price);
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function createProduct(imageSrc, title, price) {
    const newElement = document.createElement("article"); 
    newElement.classList.add("product"); // Agregar clase para estilos CSS

    const elementImage = document.createElement("img");
    elementImage.src = imageSrc;
    elementImage.alt = title; // Agregar un atributo alt para accesibilidad

    const elementTitle = document.createElement("h3");
    elementTitle.textContent = title;

    const elementPrice = document.createElement("p");
    elementPrice.textContent = `$${price.toFixed(2)}`; // Formatear el precio

    newElement.append(elementImage, elementTitle, elementPrice);
    PRODUCTS_CONTAINER.append(newElement);
}

// Llama a la función para obtener los productos
getProducts();