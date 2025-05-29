// Arrays
const numbers = [10, 20, 30, 40, 50];
console.log(numbers);
console.table(numbers);

const months =  new Array('Junuary', 'February', 'March', 'April', 'May');
console.log(months);
console.table(months);

const array = ['Hola', 10, true, null, {name: "Andrea", job: "Developer"}, [1, 2, 3]];
console.log(array);

// Acceder a los valores del arreglo
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

// Conocer la extensión de un arreglo
console.log(months.length);

// Recorrer un arreglo
numbers.forEach( function(number) {
    console.log(number);
})

// Agregar elementos
//Sabiendo la extensión del arreglo
numbers[5] = 60;

//Al final del arreglo sin importar su extensión
numbers.push(70);
numbers.push(80, 90, 100);

// Al inicio del arreglo sin importar su extensión
numbers.unshift(-30, -20, -10);

// Eliminar elementos
// El último elemento
months.pop();

// El primer elemento
months.shift();

// Un elemento en específico
// El primer valor es el índice del elemento que quiero eliminar, y el segundo valor es la cantidad de elementos que quiero eliminar a partir de ahí
months.splice(1, 1);

console.table(numbers);
console.table(months);


// Rest Operator o Spread Operator
// Simulación del push y unshift
const newArray = ['Year', ...months, 'June', 'July'];
console.log(newArray);