// Pedir el precio del producto sin IVA
let precioSinIVA = parseFloat(prompt("Ingresa el precio del producto sin IVA:"));

// Calcular el IVA (19%)
let iva = precioSinIVA * 0.19;

// Calcular el total a pagar
let totalPagar = precioSinIVA + iva;

// Mostrar resultados en consola
console.log("Precio sin IVA: $" + precioSinIVA.toFixed(2));
console.log("IVA (19%): $" + iva.toFixed(2));
console.log("Total a pagar: $" + totalPagar.toFixed(2));
