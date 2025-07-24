// Pedir la cantidad de hombres y mujeres
let hombres = parseInt(prompt("Ingresa la cantidad de alumnos hombres:"));
let mujeres = parseInt(prompt("Ingresa la cantidad de alumnas mujeres:"));

// Calcular total de estudiantes
let total = hombres + mujeres;

// Calcular porcentajes
let porcentajeHombres = (hombres / total) * 100;
let porcentajeMujeres = (mujeres / total) * 100;

// Mostrar resultados en consola
console.log("Total de estudiantes: " + total);
console.log("Porcentaje de hombres: " + porcentajeHombres.toFixed(2) + "%");
console.log("Porcentaje de mujeres: " + porcentajeMujeres.toFixed(2) + "%");

// También puedes mostrarlo en la página:
document.write("<h2>Distribución del salón</h2>");
document.write("<p>Total estudiantes: " + total + "</p>");
document.write("<p>Porcentaje de hombres: " + porcentajeHombres.toFixed(2) + "%</p>");
document.write("<p>Porcentaje de mujeres: " + porcentajeMujeres.toFixed(2) + "%</p>");
