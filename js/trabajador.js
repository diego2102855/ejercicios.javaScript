// Pedimos los datos al usuario
let horasTotales = parseFloat(prompt("Ingresa el total de horas trabajadas en el mes:"));
let horasExtras = parseFloat(prompt("Ingresa la cantidad de horas extras trabajadas:"));
let valorHoraNormal = parseFloat(prompt("Ingresa el valor por hora normal:"));
let valorHoraExtra = parseFloat(prompt("Ingresa el valor por hora extra:"));

// Calculamos horas normales
let horasNormales = horasTotales - horasExtras;

// Calculamos el sueldo
let sueldo = (horasNormales * valorHoraNormal) + (horasExtras * valorHoraExtra);

// Mostramos el resultado
console.log("Horas normales trabajadas: " + horasNormales);
console.log("Horas extras trabajadas: " + horasExtras);
console.log("Sueldo mensual: $" + sueldo.toFixed(2));
