function add(n1, n2) {
    return n1 + n2;
}

const resultAdd = add(2, 3);

console.log(resultAdd);


let total = 0;

function addCart(price) {
    return total += price;
}

function calculateTaxes() {
    return 1.15 * total;
}

total = addCart(200);
total = addCart(300);
total = addCart(400);

console.log(`Total: $${total}`);

const totalAmountDue = calculateTaxes(total);

console.log(`Total con impuestos: $${totalAmountDue}`);