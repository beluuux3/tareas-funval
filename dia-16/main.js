/* 
    dado un array de notas de un estudiante sacar el 
    promedio del mismo y verificar si esta aprobado o reprobado
    let notas =[90,23,65,0,90]
*/

let notas = [90, 23, 65, 0, 90];
let prom = 0,
  sum = 0;

for (let i = 0; i < notas.length; i++) {
  sum += notas[i];
}

prom = sum / notas.length;

if (prom > 51) {
  console.log("Tu promedio es: " + prom + ". APROBASTE");
} else {
  console.log("Tu promedio es: " + prom + ". REPROBASTE");
}
/* 
    FUNVAL
    EDADES
    Cantidad de personas que deben recibir bonos de antiguedad > 34
*/
let edad = [65, 26, 33, 20, 35, 67, 78];
let ingresa = [];

for (let i = 0; i < edad.length; i++) {
  if (edad[i] > 34) {
    ingresa.push(edad[i]);
  }
}

console.log(ingresa);

/* 
    Ingresar matriz cuadrada

    Realizar suma de la diagonal principal  y en otra variabl la suma de la diagonal secundaria
*/
/* let matriz = [];
let resultado1 = 0,
  resultado2 = 0,
  numero = 0;

let N = parseInt(prompt("Ingrese tamaño de la matriz cuadrada"));

for (let i = 0; i < N; i++) {
  matriz[i] = [];
  for (let j = 0; j < N; j++) {
    numero = parseInt(prompt("Ingrese numeros: "));
    matriz[i][j] = numero;
  }
}

for (let i = 0; i < N; i++) {
  resultado1 += matriz[i][i];
  resultado2 += matriz[i][N - 1 - i];
}

console.log(matriz);
console.log("Suma diagonal principal es: " + resultado1);
console.log("Suma diagonal secundaria es: " + resultado2); */

// 2. Agrega un elemento al final del array usando push y muestra el nuevo array.

let nombres = ["Carlos", "Juan", "Belen", "Mariel"];

nombres.push("Carlita");
console.log(nombres);

// 3. Quita el último elemento usando pop y muestra el elemento eliminado y el array final.
// 4. Agrega un elemento al inicio del array usando unshift y muestra el resultado.

nombres.unshift("Araceli");
console.log(nombres);
// 5. Elimina el primer elemento con shift y muestra el elemento eliminado.
// 6. Crea un array de números y muestra cuántos elementos tiene con length.
let numbers = [1, 11, 45, 78, 95, 62, 31];
console.log(numbers, numbers.length);

// 7. Recorre un array de frutas con un bucle for y muestra cada fruta en consola.
// 8. Recorre un array de números con for of y muestra el doble de cada número.

for (const number of numbers) {
  console.log(number * 2);
}
// 9. Crea un array de colores y muestra el índice y el valor de cada elemento usando for.
// 10. Crea un array vacío y agrega 5 elementos con push dentro de un bucle for.
/* let array1 = [];

for (let i = 0; i < 5; i++) {
  array1.push(prompt("Ingresa Numero:"));
}
console.log(array1); */

// 11. Crea un array de 5 números y suma todos sus valores usando un bucle for.
// 12. Crea un array de palabras y cuenta cuántas tienen más de 4 letras.

let palabras = ["Holiwis", "Como", "Estas", "Muchacho", "Dia", "Bye", "Taza"];
let contM = 0;
for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].length > 4) {
    contM++;
  }
}
console.log(contM + " palabras tienen mas de 4 letras.");

// 13. Crea un array con nombres y verifica si existe un nombre específico recorriéndolo.
// 14. Crea un array con edades y muestra solo las edades mayores a 18.

let edades1 = [1, 22, 15, 34, 60, 32, 11, 52, 45];
let edadMayor = [];
for (let i = 0; i < edades1.length; i++) {
  if (edades1[i] > 18) {
    edadMayor.push(edades1[i]);
  }
}

console.log("Edades mayor a 18: " + edadMayor);

// 15. Crea un array de números y crea un nuevo array con el triple de cada número.
// 16. Crea un array de precios y calcula el total sumando todos sus elementos.

let precios = [15, 45, 25, 65, 85, 13, 3];
let sumaPrecios = 0;

for (let i = 0; i < precios.length; i++) {
  sumaPrecios += precios[i];
}

console.log(precios, " Suma total es: ", sumaPrecios);

// 17. Crea un array de 10 números y cuenta cuántos son pares.
// 18. Crea un array con nombres y agrega uno nuevo solo si no está repetido.

let nuevoNombre = prompt("Ingresa nuevo nombre: ").toLowerCase();
let existe = false;

console.log(nombres);

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i].toLowerCase() == nuevoNombre) {
    existe = true;
  }
}

if (existe) {
  console.log("Ya existe el nombre");
} else {
  nombres.push(nuevoNombre);
  console.log(nombres);
}

// 19. Crea un array con números y muestra cuál es el mayor (sin usar Math.max).
// 20. Crea un array con números y muestra cuál es el menor (sin usar Math.min).

let nMayor = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > nMayor) {
    nMayor = numbers[i];
  }
}
console.log(numbers);
console.log("El número mayor es: " + nMayor);

// 21. Crea un array con nombres y elimina el último elemento si hay más de 5 elementos.
// 22. Crea un array con 5 nombres y usa un bucle para mostrar cada nombre en mayúsculas.

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i].toUpperCase());
}

// 23. Crea un array con 5 números y crea otro array con los números invertidos.
// 24. Crea un array de 5 números y calcula el promedio.

let numero1 = [90, 23, 65, 0, 90];
let sum1 = 0,
  prome;

for (let i = 0; i < numero1.length; i++) {
  sum1 += numero1[i];
}

prome = sum1 / numero1.length;

console.log(numero1 + " el promedio es: " + prome);

// 25. Crea un array con nombres y elimina un nombre específico recorriéndolo.
// 26. Crea un array de notas (0 a 100) y cuenta cuántos aprobaron (>= 51).

let notas2 = [51, 35, 41, 20, 15, 1, 0, 1, 0, 36, 46, 91, 100, 85, 75, 62];
let aprob = 0,
  repro = 0;
for (let i = 0; i < notas2.length; i++) {
  if (notas2[i] >= 51) {
    aprob++;
  } else {
    repro++;
  }
}

console.log(`${notas2}
  Cantidad de aprobados: ${aprob}
  Cantidad de reprobados: ${repro}`);
// 27. Crea un array con varios animales y muestra en qué posición está “perro”.
// 28. Crea un array de frutas y cambia el valor de la segunda fruta por otra nueva.
let frutas = [
  "Mango",
  "Naranja",
  "Uva",
  "Banana",
  "Mandarina",
  "Papaya",
  "Piña",
];

console.log(frutas);

for (let i = 0; i < frutas.length; i++) {
  if (i == 1) {
    frutas[i] = "Coco";
  }
}

console.log(frutas);
// 29. Crea un array con 5 números y muestra solo los que estén en posiciones pares.
// 30. Crea un array con nombres y forma una cadena con todos los nombres separados por coma.

let nombres2 = "";
console.log(nombres);
for (let i = 0; i < nombres.length; i++) {
  nombres2 += `${nombres[i]}, `;
}

console.log(nombres2);

// 4. Crea un array con números y elimina los números repetidos dejando solo uno de cada valor (sin usar Set).

let num = [1, 5, 3, 4, 6, 88, 4, 6, 4, 8, 9, 77];
let repet = false;

for (let i = 0; i < num.length; i++) {
  for (let j = i + 1; j < num.length; j++) {
    if (num[i] == num[j]) {
      repet = true;
      break;
    }
  }
}
