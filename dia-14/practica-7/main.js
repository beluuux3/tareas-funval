/*Ejercicio 1 – Área de triángulos múltiples
Crea una función llamada calcularAreaTriangulo que reciba base y altura y devuelva el área:

Pide al usuario 3 veces la base y altura de diferentes triángulos usando prompt.
Usa un bucle for para solicitar los datos 3 veces.
Usa condicional para verificar que base y altura sean mayores que 0.

Muestra cada área en consola.*/

console.log("EJERCICIO 1 - Area de triangulos multiples");
let base, altura;

function calcularAreaTriangulo(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

let cant = parseInt(
  prompt("Ingrese la cantidad de triangulos que desea calcular: ")
);

for (let i = 1; i <= cant; i++) {
  let base = parseFloat(prompt(`Ingrese la base del triangulo ${i}:`));
  let altura = parseFloat(prompt(`Ingrese la altura del triangulo ${i}:`));

  if (base <= 0 || altura <= 0) {
    console.log("los datos deben ser mayor a 0.");
    i--;
  } else {
    console.log(
      `El triangulo ${i} con base ${base} y altura ${altura} tiene un área de: ${calcularAreaTriangulo(
        base,
        altura
      )}.`
    );
  }
}

/*Ejercicio 2 – Conversión de Celsius a Fahrenheit
Crea una función convertirAFahrenheit que reciba un valor en Celsius y lo convierta a Fahrenheit:

Pide al usuario 5 temperaturas mediante prompt.

Usa un bucle para hacer las 5 conversiones.
Usa un condicional para verificar que el valor ingresado sea un número.

Muestra cada resultado en consola.
*/
console.log("EJERCICIO 2 - Conversion de Celsius a Fahrenheit");

function convertirCelsiusAFahrenheit(numero) {
  let faren = (numero * 9) / 5 + 32;

  return faren;
}

let cont = parseInt(prompt("Ingrese cantidad de conversiones: "));

while (cont > 0) {
  let cel = parseInt(prompt("Ingrese la grados Celsius: "));

  if (!isNaN(cel)) {
    console.log(
      "Conversion: " + cel + "ºC --> " + convertirCelsiusAFahrenheit(cel) + "ºF"
    );

    cont--;
  } else {
    console.log("Ingrese un número!");
  }
}

/*
Ejercicio 3 – Contar vocales en un texto
Crea una función contarVocales que reciba un texto y devuelva el número de vocales:

Pide al usuario 3 textos mediante prompt.

Usa un bucle para recorrer cada letra del texto.
Usa condicionales para determinar si un carácter es vocal.

Muestra en consola cuántas vocales tiene cada texto.
*/

console.log("EJERCICIO 3 - Contar vocales en un texto");

let texto = prompt("Ingresa el texto para contar las vocales: ");

console.log("Cantidad de Vocales de " + texto + " es " + contarVocales(texto));

function contarVocales(textito) {
  let sum = 0;
  let text1 = textito.toLowerCase();
  for (let i = 0; i < text1.length; i++) {
    if (
      text1[i] == "a" ||
      text1[i] == "e" ||
      text1[i] == "i" ||
      text1[i] == "o" ||
      text1[i] == "u"
    ) {
      sum++;
    }
  }
  if (sum > 0) {
    return sum;
  } else {
    console.log("No hay vocales");
  }
}

/*Ejercicio 4 – Pares e impares en un rango
Crea una función clasificarParesImpares que reciba dos números inicio y fin y:

Use un bucle for para recorrer todos los números desde inicio hasta fin.
Use condicional para imprimir si cada número es par o impar.

Pide al usuario inicio y fin mediante prompt.

Muestra el resultado en consola.
*/

console.log("EJERCICIO 4 - Pares e Impares en un rango");

let n1 = parseInt(prompt("Ingrese número inicio: "));
let n2 = parseInt(prompt("Ingrese número fin: "));

clasificarPareImpares(n1, n2);

function clasificarPareImpares(n, m) {
  for (let i = n; i <= m; i++) {
    if (i % 2 == 0) {
      console.log(i + " es número par");
    } else {
      console.log(i + " es número impar");
    }
  }
  return;
}

/*Ejercicio 5 – Número mayor y suma
Crea una función mayorYSuma que reciba 5 números separados y:

Use un bucle para comparar cada número y encontrar el mayor.
Use condicionales para verificar cuál es el mayor.

Calcula también la suma de los 5 números.

Pide al usuario los 5 números mediante prompt.

Muestra en consola el número mayor y la suma total.*/

let nu1 = parseInt(prompt("Ingresa el primer número:"));
let nu2 = parseInt(prompt("Ingresa el segundo número:"));
let nu3 = parseInt(prompt("Ingresa el tercer número:"));
let nu4 = parseInt(prompt("Ingresa el cuarto número:"));
let nu5 = parseInt(prompt("Ingresa el quinto número:"));

mayorYSuma(nu1, nu2, nu3, nu4, nu5);

console.log("EJERCICIO 5 - Numero Mayor y suma");

function mayorYSuma(num1, num2, num3, num4, num5) {
  let sumita = num1 + num2 + num3 + num4 + num5;
  let cont = 1;
  let mayor = num1;

  while (cont <= 5) {
    let actual = 0;

    if (cont == 1) actual = num1;
    else if (cont == 2) actual = num2;
    else if (cont == 3) actual = num3;
    else if (cont == 4) actual = num4;
    else if (cont == 5) actual = num5;

    if (actual > mayor) {
      mayor = actual;
    }

    cont++;
  }
  console.log("La suma total es: " + sumita);
  console.log("El número mayor es: " + mayor);

  return;
}
