console.log("PRACTICA NRO 4");

console.log("EJERCICIO 1");

/* 
Ejercicio 1 – Calculadora de Promedio y Rendimiento
Pide al usuario cuatro notas (del 0 al 100).
Calcula el promedio y muestra un mensaje según el resultado:
“Excelente” si el promedio es mayor o igual a 90
“Bueno” si es mayor o igual a 75
“Regular” si es mayor o igual a 60
“Insuficiente” en caso contrario

Instrucciones:
Usa if-else-if y operadores lógicos para determinar el mensaje.
Muestra el resultado con console.log() o alert().
*/

let nota1 = parseInt(prompt("Ingrese Primera Nota (0-100): "));
let nota2 = parseInt(prompt("Ingrese Segunda Nota (0-100): "));
let nota3 = parseInt(prompt("Ingrese Tercera Nota (0-100): "));
let nota4 = parseInt(prompt("Ingrese Cuarta Nota (0-100): "));

let resultado = (nota1 + nota2 + nota3 + nota4) / 4;

if (
  nota1 >= 0 &&
  nota1 <= 100 &&
  nota2 >= 0 &&
  nota2 <= 100 &&
  nota3 >= 0 &&
  nota3 <= 100 &&
  nota4 >= 0 &&
  nota4 <= 100
) {
  if (resultado >= 90) {
    alert(`Promedio Final: ${resultado}. El resultado es Excelente`);
  } else if (resultado >= 75) {
    alert(`Promedio Final: ${resultado}. El resultado es Bueno`);
  } else if (resultado >= 60) {
    alert(`Promedio Final: ${resultado}. El resultado es Regular`);
  } else {
    alert(`Promedio Final: ${resultado}. El resultado es Insuficiente`);
  }
  console.log("PROMEDIO FINAL:", resultado);
} else {
  alert("Ingrese notas válidas entre 0 y 100.");
}

/*
Ejercicio 2 – Calculadora de Tarifa de Transporte
El programa debe pedir al usuario:
Su edad
Si es estudiante (“sí” o “no”)
La distancia que recorrerá (en kilómetros)
Reglas del costo:
Menores de 18 pagan 50% del precio base
Estudiantes pagan 75% del precio base
Mayores de 60 pagan 40% del precio base
Si el viaje es mayor a 30 km, se agrega un 10% adicional al total

Instrucciones:
Usa condiciones anidadas (if, else if, else) y operadores lógicos para determinar el costo final.
*/

console.log("EJERCICIO 2");

let costoPasaje = 3;
let edad = parseInt(prompt("Ingrese su edad: "));
let esEstudiante = prompt("¿Es estudiante? (Si/No): ").toLowerCase();
let distancia = parseInt(prompt("Distancia que recorrerá (km): "));
let costoFinal;
if (esEstudiante == "si" || edad < 18 || edad > 60) {
  if (esEstudiante) costoFinal = costoPasaje * 0.75;
  else if (edad < 18) costoFinal = costoPasaje * 0.5;
  else costoFinal = costoPasaje * 0.4;
} else {
  costoFinal = costoPasaje;
}

if (distancia > 30) {
  costoFinal *= 1.1;
}

console.log("Tarifa de transporte final: " + costoFinal.toFixed(2) + " Bs");

/*
Ejercicio 3 – Menú de Conversión de Unidades
Muestra un menú con 4 opciones:
Convertir de Celsius a Fahrenheit
Convertir de Fahrenheit a Celsius
Convertir de Metros a Kilómetros
Convertir de Kilómetros a Metros

El usuario debe elegir una opción y escribir el valor a convertir.
El programa mostrará el resultado correspondiente.

Instrucciones:
Usa switch-case para realizar las conversiones y prompt() para las entradas.
*/

console.log("EJERCICIO 3");
console.log("Conversión de Unidades");

let opcion = parseInt(
  prompt(`Elige tipo de conversión que deseas
1. Convertir de Celsius a Fahrenheit
2. Convertir de Fahrenheit a Celsius
3. Convertir de Metros a Kilómetros
4. Convertir de Kilómetros a Metros

Ingresa (1-4): `)
);

let conv;
if (opcion > 0 && opcion < 5) {
  let num = parseFloat(prompt("Ingresa el dato a convertir: "));

  switch (opcion) {
    case 1:
      conv = num * (9 / 5) + 32;
      console.log(
        "Conversión de Celsius a Fahrenheit: " +
          num +
          " ºC --> " +
          conv.toFixed(2) +
          " ºF"
      );
      break;
    case 2:
      conv = (num - 32) * (5 / 9);
      console.log(
        "Conversión de Fahrenheit a Celsius: " +
          num +
          " ºF --> " +
          conv.toFixed(2) +
          " ºC"
      );
      break;
    case 3:
      conv = num / 1000;
      console.log(
        "Conversión de Metros a Kilómetros: " +
          num +
          " m --> " +
          conv.toFixed(2) +
          " km"
      );
      break;
    case 4:
      conv = num * 1000;
      console.log(
        "Conversión de Kilómetros a Metros: " +
          num +
          " km --> " +
          conv.toFixed(2) +
          " m"
      );
      break;

    default:
      break;
  }
} else {
  alert("OPCION DE MENU NO VALIDA");
}

/*
Ejercicio 4 – Sistema de Descuentos en una Tienda
El usuario debe ingresar:

El precio total de su compra
Si tiene tarjeta de cliente frecuente (“sí” o “no”)

Reglas:
Si el total es mayor a 500, aplica un 10% de descuento
Si además tiene tarjeta, aplica un 5% adicional
Si el total es menor o igual a 100, aplica un recargo del 5%
El programa debe mostrar el precio final y un mensaje indicando qué descuento se aplicó.

Instrucciones:
Utiliza operadores de asignación y condiciones anidadas para determinar el total.
*/

console.log("EJERCICIO 4");
console.log("Descuentos de Tienda");

let consumo = parseFloat(prompt("Ingrese precio total de su compra: "));
let tieneTarjeta = prompt(
  "Cuenta con tarjeta de cliente frecuente? (Si/No)"
).toLowerCase();

let precioTotal = consumo;
let descM = 0,
  descT = 0,
  recarM = 0;

console.log("FACTURA");
console.log("Consumo Bs: " + consumo);
if (consumo > 500) {
  descM = consumo * 0.1;
  precioTotal = consumo - descM;
  console.log("Descuento por compra mayor - 10%: " + descM.toFixed(2));
} else {
  if (consumo <= 100) {
    recarM = consumo * 1.05;
    precioTotal = consumo + recarM;
    console.log("Recargo por compra menor - 5%: " + recarM.toFixed(2));
  } else precioTotal = consumo;
}

if (tieneTarjeta == "si") {
  descT = precioTotal * 0.05;
  precioTotal -= descT;
  console.log("Descuento Tarjeta Cliente Frecuente: " + descT.toFixed(2));
}

console.log("TOTAL Bs:" + precioTotal.toFixed(2));

/*
Ejercicio 5 – Calculadora de Edad y Etapa de Vida
Pide al usuario:

Su año de nacimiento
El año actual

Calcula su edad y muestra un mensaje según el rango:
Menor de edad: menos de 18 años
Adulto joven: entre 18 y 30 años
Adulto: entre 31 y 59 años
Adulto mayor: 60 años o más

BONUS:
Pregunta además si ya cumplió años este año (“sí” o “no”) y ajusta la edad si es necesario.
*/

console.log("EJERCICIO 5");

let nacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
let actual = parseInt(prompt("Ingrese año actual: "));
let fechaCumplida = prompt(
  "Usted ya cumplió años el presente año? (Si/No)"
).toLowerCase();

let age = actual - nacimiento;

if (fechaCumplida == "no") {
  age -= 1;
}

if (age >= 18) {
  if (age > 30) {
    if (age > 59) {
      console.log("Tienes " + age + " eres Adulto Mayor");
    } else console.log("Tienes " + age + " eres Adulto");
  } else console.log("Tienes " + age + " eres Adulto joven");
} else console.log("Tienes " + age + " eres Menor de edad");
