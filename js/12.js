"use strict"; // Ejecutar JS en modo estricto
// Objetos
const product = {
    name: "Monitor 20 pulgadas",
    price: 300,
    availability: true
}

// Freeze
Object.freeze(product);
product.image = 'image.jpg';
delete product.price;
console.log(product);

//  Saber si un objeto está sellado
console.log(Object.isFrozen(product));

// Seal
Object.seal(product);
product.price = 800;
delete product.price;
console.log(product);

// Saber si un objeto está sellado
console.log(Object.isSealed(product));