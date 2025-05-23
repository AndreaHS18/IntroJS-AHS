// String o Cadenas de texto

const product = "Monitor de 20\""; //Escapar las comillas dobles
const product2 = String('Monitor de 20"');
const product3 = new String('Monitor de 20"');

// console.log(product);
// console.log(typeof product);
// console.log(product2);
// console.log(typeof product2);
// console.log(product3);
// console.log(typeof product3);

const product_a = 'Monitor 20"';
const product_b = 'Monitor HD"';
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';

console.log(product_a);
console.log(product_b);

// Lenght
// // Muestra la extensión de la cadena 
console.log(tweet.length);

// IndexOf
// Muestra en qué posición se encuentra el texto que estoy buscando (si es mayor que 0 sí existe)
console.log(tweet.indexOf('JavaScript'));
console.log(product_b.indexOf('Tablet'));

// Includes
// Retorna true o false si el texto existe o no
console.log(tweet.includes('JavaScript'));
console.log(product_b.includes('Tablet'));