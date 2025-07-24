console.log("**Cálculo de salario con VAR**");

var nombreEml = "Paco Disney";
var cargo = "Front Junior";
var salario = 2500;

var descuentoSalud = salario * 0.04;
var descuentoPension = salario * 0.07;
var salarioNeto = salario - descuentoSalud - descuentoPension;

console.log(`Empleado: ${nombreEml}\nCargo: ${cargo}\nSalario Bruto: $${salario}`);
console.log(`Descuento Salud (4%): $${descuentoSalud}`);
console.log(`Descuento Pensión (7%): $${descuentoPension}`);
console.log(`Salario Neto a Recibir: $${salarioNeto}\n`);

var nombreEml = "Luis Disney";
var cargo = "Jefe TI";
var salario = 5000;

descuentoSalud = salario * 0.04;
descuentoPension = salario * 0.07;
salarioNeto = salario - descuentoSalud - descuentoPension;

console.log(`Empleado: ${nombreEml}\nCargo: ${cargo}\nSalario Bruto: $${salario}`);
console.log(`Descuento Salud (4%): $${descuentoSalud}`);
console.log(`Descuento Pensión (7%): $${descuentoPension}`);
console.log(`Salario Neto a Recibir: $${salarioNeto}`);
