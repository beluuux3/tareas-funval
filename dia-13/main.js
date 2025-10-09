// =======================================================
// BUCLE FOR (EJERCICIOS 1 - 15)
// =======================================================

/*
1. Muestra los números del 1 al 10 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
console.log("Ejercicio 1 - Del 1 al 10");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*
2. Muestra los números del 10 al 1 en orden descendente usando un bucle for.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 2 - Del 10 al 1");

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

/*
3. Muestra solo los números pares del 1 al 20 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
console.log("Ejercicio 3 - Del 1 al 20 solo pares");
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) console.log(i);
}

/*
4. Muestra solo los números impares del 1 al 20 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
console.log("Ejercicio 4 - Del 1 al 20 solo impares");
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) console.log(i);
}
/*
5. Muestra la tabla de multiplicar del 5 (del 1 al 10).
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 5 - Tabla de Multiplicar del 5 (1-10)");

for (let i = 1; i <= 10; i++) {
  console.log("5 * " + i + " = " + 5 * i);
}

/*
6. Calcula la suma de los números del 1 al 100 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
console.log("Ejercicio 6 - Suma de los numeros del 1 al 100");
let suma = 0;

for (let i = 1; i <= 100; i++) {
  suma += i;
}
console.log(suma);

/*
7. Muestra los múltiplos de 3 entre 1 y 30 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 7 - Multiplos de 3 (1 al 30)");

for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

/*
8. Calcula el factorial de un número (por ejemplo 5) usando for.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 8 - Calcular Factorial con For");

let fact = 1;

for (let i = 1; i <= 5; i++) {
  fact *= i;
}
console.log(fact);
/*
9. Muestra los primeros 10 números cuadrados (1², 2², 3²…).
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 9 - 10 primero numeros cuadrados");

for (let i = 1; i <= 10; i++) {
  console.log(i ** 2);
}

/*
10. Muestra los números del 1 al 50 y muestra "Múltiplo de 10" cuando corresponda.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 10 - Multiplos de 10 ");

for (let i = 1; i <= 50; i++) {
  if (i % 10 == 0) console.log(i + " Múltiplo de 10");
  else console.log(i);
}

/*
11. Calcula la suma de los números pares entre 1 y 50.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 11 - Suma de los numeros pares del 1 al 50");
let sumP = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) sumP += i;
}
console.log(sumP);

/*
12. Calcula la suma de los números impares entre 1 y 50.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 12 - Suma de los numeros impares del 1 al 50");
let sumI = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 != 0) sumI += i;
}
console.log(sumI);

/*
13. Muestra los números del 1 al 20 e indica si cada uno es "par" o "impar".
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 13 - Pares o Impares (1-20)");

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) console.log(i + " es par");
  else console.log(i + " es impar");
}

/*
14. Muestra los números del 1 al 30 e indica si son múltiplos de 3.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 14 - Multiplo de 3 (1-30)");

for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0) console.log(i + " es múltiplo de 3");
  else console.log(i);
}

/*
15. Muestra un conteo regresivo desde 20 hasta 0.
*/
// RESPUESTA AQUÍ 👇
console.log("Ejercicio 15 - Conteo regresivo (20-0)");

for (let i = 20; i >= 0; i--) {
  console.log(i);
}

// =======================================================
// BUCLE WHILE (EJERCICIOS 16 - 25)
// =======================================================

/*
16. Muestra los números del 1 al 10 usando un bucle while.
*/
// RESPUESTA AQUÍ 👇
console.log("Ejercicio 16 - Mostrar numero (1-10)");
let conteo = 1;
while (conteo <= 10) {
  console.log(conteo);
  conteo++;
}

/*
17. Muestra los números pares del 2 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 17 - Mostrar numero pares (2-20)");
let conteoP = 2;
while (conteoP <= 20) {
  if (conteoP % 2 == 0) console.log(conteoP);
  conteoP++;
}

/*
18. Muestra los números del 10 al 1 usando while.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 18 - Conteo Numeros (10-1)");
let conteoR = 10;
while (conteoR >= 1) {
  console.log(conteoR);
  conteoR--;
}
/*
19. Muestra los números del 1 al 30, pero solo los múltiplos de 5.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 19 - Multiplos de 5 (1-30)");
let j = 1;
while (j <= 30) {
  if (j % 5 == 0) console.log(j);
  j++;
}

/*
20. Calcula la suma de los números del 1 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇
console.log("Ejercicio 20 - Suma de 1 al 20");
let sum = 1;
let sumas = 0;
while (sum <= 20) {
  sumas += sum;
  sum++;
}
console.log(sumas);

/*
21. Muestra los números del 1 al 15 e indica si son pares o impares usando while.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 21 - Pares o impares (1-15)");
let pi = 1;

while (pi <= 15) {
  if (pi % 2 == 0) {
    console.log(pi + " es par");
  } else {
    console.log(pi + " es impar");
  }

  pi++;
}

/*
22. Muestra la tabla de multiplicar del número 7 usando while.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 22 - Tablas del 7");
let tabla = 1;

while (tabla <= 10) {
  console.log("7 * " + tabla + " = " + tabla * 7);

  tabla++;
}

/*
23. Muestra los múltiplos de 4 entre 1 y 40 usando while.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 23 - Multiplos de 4 (1-40)");
let k = 1;
while (k <= 40) {
  if (k % 4 == 0) console.log(k);
  k++;
}

/*
24. Calcula el factorial de un número (por ejemplo 6) usando while.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 24 - Factorial");
let fact1 = 1;
let result = 1;
while (fact1 <= 6) {
  result *= fact1;
  fact1++;
}
console.log(result);

/*
25. Muestra un conteo regresivo desde 15 hasta 0 usando while.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 25 - Conteo regresivo (15-0)");
let conteo1 = 15;

while (conteo1 >= 0) {
  console.log(conteo1);
  conteo1--;
}

// =======================================================
// BUCLE DO...WHILE (EJERCICIOS 26 - 30)
// =======================================================

/*
26. Muestra los números del 1 al 10 usando do...while.
*/
// RESPUESTA AQUÍ 👇

/*
27. Pide un número y muestra su tabla de multiplicar usando do...while.
*/
// RESPUESTA AQUÍ 👇

/*
28. Muestra los números del 10 al 1 usando do...while.
*/
// RESPUESTA AQUÍ 👇

/*
29. Muestra los números del 1 al 30 y muestra un mensaje cuando sea múltiplo de 6.
*/
// RESPUESTA AQUÍ 👇

/*
30. Calcula la suma de los números del 1 al 50 usando do...while.
*/
// RESPUESTA AQUÍ 👇

// =======================================================
// COMBINACIÓN DE TEMAS (EJERCICIOS 31 - 40)
// =======================================================

/*
31. Pide un número y muestra todos los números desde 1 hasta ese número.
   Si es múltiplo de 3, muestra "Fizz", si es múltiplo de 5, muestra "Buzz".
*/
// RESPUESTA AQUÍ 👇

/*
32. Pide al usuario un número y calcula su factorial usando un bucle.
*/
// RESPUESTA AQUÍ 👇

/*
33. Pide nombre de usuario y contraseña.
   Si usuario es "Kevin" o "Belen" y contraseña es "1234",
   muestra "Acceso autorizado", de lo contrario "Denegado".
*/
// RESPUESTA AQUÍ 👇

/*
34. Pide un número y muestra todos los pares hasta ese número.
   Luego muestra la cantidad total de pares encontrados.
*/
// RESPUESTA AQUÍ 👇

/*
35. Calcula la suma de todos los múltiplos de 3 y 5 entre 1 y 100.
*/
// RESPUESTA AQUÍ 👇

/*
36. Pide un número y muestra si es primo o no, usando un bucle para verificar divisores.
*/
// RESPUESTA AQUÍ 👇

/*
37. Simula un inicio de sesión:
   Tienes 3 intentos para ingresar correctamente usuario="admin" y contraseña="1234".
   Si falla los 3 intentos, muestra "Acceso bloqueado".
*/
// RESPUESTA AQUÍ 👇

/*
38. Pide 5 números y calcula su suma total y promedio.
*/
// RESPUESTA AQUÍ 👇

/*
39. Muestra los números del 1 al 50.
   Si el número es divisible por 3 muestra "Fizz",
   si es divisible por 5 muestra "Buzz",
   si es divisible por ambos muestra "FizzBuzz".
*/
// RESPUESTA AQUÍ 👇

/*
40. Juego de adivinar número:
   Genera un número aleatorio entre 1 y 10.
   Usa un bucle para pedir al usuario que adivine.
   Da pistas si el número es mayor o menor.
   El juego termina cuando adivina.
*/
// RESPUESTA AQUÍ 👇
