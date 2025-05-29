// Declaración de la función
function add() {
    console.log(10 + 10);
}
// Llamada a la función
add();

// Expresión de la función
const add2 = function() {
    console.log(3 + 3);
}
add2();

// IIFE
// Funciones que se mandan llamar a sí mismas
(function() {
    console.log('Esto es una función');
})();