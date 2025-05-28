// Objetos
const product = {
    name: "Monitor 20 pulgadas",
    price: 300,
    availability: true
}

// Extraer propiedades del objeto y crear una variable
// Forma vieja 
const productName = product.name;
const productPrice = product.price; 

console.log(productName);
console.log(productPrice);

// Destructuring
// Forma nueva
const {price, name, availability} = product;

console.log(price);
console.log(name);
console.log(availability);