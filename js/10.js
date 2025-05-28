// Objetos
const product = {
    name: "Monitor 20 pulgadas",
    price: 300,
    availability: true
}

// Agregar propiedades
product.image = "image.jpg";

// Eliminar propiedades
delete product.availability;

// Acceder a propiedades específicas
console.log(product.name);
console.log(product["name"]);

console.log(product);
