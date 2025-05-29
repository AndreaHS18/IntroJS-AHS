// Array methods

const months =  new Array('Junuary', 'February', 'March', 'April', 'May');

const cart = [
    { name: 'Monitor de 20 pulgadas', price: 500 },
    { name: 'Televisión de 50 pulgadas', price: 700 },
    { name: 'Tablet', price: 300 },
    { name: 'Audífonos', price: 200 },
    { name: 'Teclado', price: 50 },
    { name: 'Celular', price: 500 },
    { name: 'Bocinas', price: 300 },
    { name: 'Laptop', price: 800 }
]

// forEach
months.forEach( function(month) {
    if(month == 'March') {
        console.log('Marzo sí existe');
    }
});

// Includes
const resultMonths = months.includes('March');
console.log(resultMonths);

// Some
// Ideal para arreglo de objetos
let resultCart = cart.some( function(product) {
    return product.name === 'Celular'
})
// Con arrow function
resultCart = cart.some(product => product.name === 'Celular');
console.log(resultCart);

// Reduce
let resultPriceCart = cart.reduce( function(total, product) {
    return total + product.price
}, 0);
// Con arrow function
resultPriceCart = cart.reduce((total, product) => total + product.price, 0);
console.log(resultPriceCart);

// Filter
let resultFilterCart = cart.filter( function(product) {
    return product.price > 400;
});
resultFilterCart = cart.filter( function(product) {
    return product.name !== 'Celular';
})
// Con arrow function
resultFilterCart = cart.filter((product) => product.price > 700);
console.log(resultFilterCart);