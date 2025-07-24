// Pedir las 3 notas al usuario
let nota1 = parseFloat(prompt("Ingresa la primera nota (entre 1 y 5):"));
let nota2 = parseFloat(prompt("Ingresa la segunda nota (entre 1 y 5):"));
let nota3 = parseFloat(prompt("Ingresa la tercera nota (entre 1 y 5):"));

// Validar que las notas estén entre 1 y 5
if (
  nota1 >= 1 && nota1 <= 5 &&
  nota2 >= 1 && nota2 <= 5 &&
  nota3 >= 1 && nota3 <= 5
) {
  // Calcular el promedio
  let promedio = (nota1 + nota2 + nota3) / 3;

  // Mostrar el resultado
  console.log("Notas ingresadas: ", nota1, nota2, nota3);
  console.log("Promedio: " + promedio.toFixed(2));

  document.write("<h2>Promedio del alumno</h2>");
  document.write("<p>Nota 1: " + nota1 + "</p>");
  document.write("<p>Nota 2: " + nota2 + "</p>");
  document.write("<p>Nota 3: " + nota3 + "</p>");
  document.write("<p><strong>Promedio: " + promedio.toFixed(2) + "</strong></p>");
} else {
  console.log("❌ Las notas deben estar entre 1 y 5.");
  alert("❌ Error: Las notas deben estar entre 1 y 5.");
}
