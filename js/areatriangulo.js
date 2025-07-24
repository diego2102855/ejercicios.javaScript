// Pedir datos al usuario
let base = parseFloat(prompt("Ingrese la base del triángulo:"));
let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

// Aplicar fórmula del área
let area = (base * altura) / 2;

// Mostrar resultados en consola
console.log("*** Cálculo del Área de un Triángulo ***");
console.log(`Base ingresada: ${base}`);
console.log(`Altura ingresada: ${altura}`);
console.log(`Área del triángulo: ${area}`);
