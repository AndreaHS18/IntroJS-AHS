// Orden de las operaciones

let result;

result = 20 + 30 * 2; // La multiplicación va primero
result = (20 + 30) * 2; // Los paréntesis van primero
result = (100 + 200 + 300) * 0.2; // Conocer el 20%
result = (600 + 600) * 1.16; // Resultado con todo e impuesto del 16%
result = (600 + 600) * 1.05; // Resultado con todo e impuesto del 5%

console.log(result);


// Incrementos
let score = 10;

// Incremento en 1++
score++; // Muestra el valor y luego lo incrementa
++score; // Incrementa el valor y luego lo muestra

// Decremento en 1--
score--; // Muestra el valor y luego lo decrementa
--score; // Decrementa el valor y luego lo muestra

// Incremento personalizado
score += 10;

console.log(score);