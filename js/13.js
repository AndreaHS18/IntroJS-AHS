// Objetos
const product = {
    name: "Monitor 20 pulgadas",
    price: 300,
    availability: true
}

const measures = {
    weight: '1kg',
    height: '1m'
}

// Spread Operator
const newProduct = { ...product, ...measures };

console.log(newProduct);