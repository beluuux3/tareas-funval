/* ----------------------------------------------------------------------- */
// =======================================================
// IF SIMPLE (EJERCICIOS 1 - 5)
// =======================================================

/*
1. Pide al usuario un número con prompt.
   Muestra "Positivo" si el número es mayor que 0.
*/
// RESPUESTA AQUÍ 👇

let numero = parseInt(prompt("Ingrese un número:"));

if (numero > 0) {
  console.log("El número es positivo");
}
/*
2. Pide la edad del usuario.
   Si la edad es mayor o igual a 18, muestra "Eres mayor de edad".
*/
// RESPUESTA AQUÍ 👇

let edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18) {
  console.log("Eres mayor de edad");
}

/*
3. Pide un número y verifica si es par.
   Usa el operador % y un if.
*/
// RESPUESTA AQUÍ 👇
let par = parseInt(prompt("Ingrese un número:"));
if (par % 2 == 0) {
  console.log("Número es par");
}
/*
4. Pide una contraseña con prompt.
   Si la contraseña es "admin123", muestra "Acceso permitido".
*/
// RESPUESTA AQUÍ 👇
let contra = prompt("Ingrese una contraseña:");

if (contra == "Admin123") {
  console.log("Acceso Permitido");
}

/*
5. Pide un número.
   Si el número es igual a 100, muestra "Número exacto".
*/
// RESPUESTA AQUÍ 👇

let num = parseInt(prompt("Ingrese un número:"));

if (num == 100) {
  console.log("Número exacto");
}

// =======================================================
// IF - ELSE (EJERCICIOS 6 - 10)
// =======================================================

/*
6. Pide un número.
   Si es mayor que 50 muestra "Número alto", caso contrario "Número bajo".
*/
// RESPUESTA AQUÍ 👇

let num1 = parseInt(prompt("Ingrese un número:"));

if (num1 > 50) {
  console.log("Número Alto");
} else console.log("Número Bajo");

/*
7. Pide la edad del usuario.
   Si es mayor o igual a 18 muestra "Bienvenido",
   caso contrario "Acceso denegado".
*/
// RESPUESTA AQUÍ 👇

let edad1 = parseInt(prompt("Ingrese su edad:"));
if (edad1 >= 18) {
  console.log("Bienvenido");
} else {
  console.log("Acceso Denegado");
}

/*
8. Pide una nota entre 0 y 100.
   Si la nota es mayor o igual a 60 muestra "Aprobado", de lo contrario "Reprobado".
*/
// RESPUESTA AQUÍ 👇

let nota = parseInt(prompt("Ingrese un número entre 0 y 100:"));
if (nota >= 60) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

/*
9. Pide un nombre.
   Si el nombre es "Kevin" muestra "Hola Kevin",
   de lo contrario "Hola invitado".
*/
// RESPUESTA AQUÍ

let nombre = prompt("Ingrese su nombre:");

if (nombre == "Kevin") {
  console.log("Hola Kevin");
} else {
  console.log("Hola invitado");
}

/*
10. Pide un número y muestra si es par o impar usando if-else.
*/
// RESPUESTA AQUÍ 👇

let num2 = parseInt(prompt("Ingrese un número:"));

if (num2 % 2 == 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}

// =======================================================
// IF - ELSE IF (EJERCICIOS 11 - 15)
// =======================================================

/*
11. Pide una nota (0 a 100) e imprime:
   - "Excelente" si es mayor o igual a 90
   - "Bueno" si está entre 70 y 89
   - "Regular" si está entre 50 y 69
   - "Insuficiente" si es menor a 50
*/
// RESPUESTA AQUÍ 👇

let nota1 = parseInt(prompt("Ingrese su nota (0-100):"));
if (nota1 > 50) {
  if (nota1 > 69) {
    if (nota1 > 89) {
      console.log("Nota Excelente");
    } else console.log("Nota Buena");
  } else console.log("Nota Regular");
} else {
  console.log("Nota Insuficiente");
}
/*
12. Pide la temperatura (en grados Celsius).
   Muestra:
   - "Frío" si es menor a 15
   - "Templado" si está entre 15 y 25
   - "Caluroso" si es mayor a 25
*/
// RESPUESTA AQUÍ 👇

let clima = parseInt(prompt("Ingrese la temperatura:"));
if (clima > 25) {
  console.log("Día Caluroso");
} else if (clima > 15) {
  console.log("Dia Regular");
} else {
  console.log("Día Frio");
}

/*
13. Pide una hora (0 a 23).
   Muestra:
   - "Buenos días" si está entre 6 y 11
   - "Buenas tardes" si está entre 12 y 18
   - "Buenas noches" si está entre 19 y 23
   - "Durmiendo" si está entre 0 y 5
*/
// RESPUESTA AQUÍ

let hora = parseInt(prompt("Ingrese la hora (0 a 23):"));
if (hora > 25) {
  console.log("Día Caluroso");
} else if (clima > 15) {
  console.log("Dia Regular");
} else {
  console.log("Día Frio");
}

/*
14. Pide un número del 1 al 3 y muestra un mensaje distinto para cada uno.
*/
// RESPUESTA AQUÍ 👇

let num3 = parseInt(prompt("Ingrese 1, 2 o 3:"));
if (num3 == 1) {
  console.log("Holiwis Parce");
} else if (num3 == 2) {
  console.log("Holiwis Causa");
} else if (num3 == 3) {
  console.log("Holiwis Bro");
}
console.log("Ño es 1, 2 o 3");

/*
15. Pide un número y muestra:
   - "Negativo" si es menor que 0
   - "Cero" si es igual a 0
   - "Positivo" si es mayor que 0
*/
// RESPUESTA AQUÍ 👇

let num4 = parseInt(prompt("Ingrese número:"));
if (num4 >= 0) {
  if (num4 == 0) {
    console.log("Es igual a 0");
  } else console.log("Es mayor a 0");
} else console.log("Es menor a 0");

// =======================================================
// IF ANIDADO (EJERCICIOS 16 - 20)
// =======================================================

/*
16. Pide una edad.
   Si es mayor o igual a 18 muestra "Mayor de edad".
   Dentro del mismo if, si es mayor o igual a 60 muestra "Adulto mayor".
*/
// RESPUESTA AQUÍ 👇

let age = parseInt(prompt("Ingrese su edad:"));
if (age >= 18) {
  console.log("Mayor de edad");
  if (age >= 60) {
    console.log("Adulto Mayor");
  }
}

/*
17. Pide una nota.
   Si es mayor o igual a 60 muestra "Aprobado".
   Dentro de ese if, si la nota es mayor o igual a 90 muestra "Excelente".
*/
// RESPUESTA AQUÍ 👇

let nota2 = parseInt(prompt("Ingrese su nota:"));
if (nota2 >= 60) {
  console.log("Aprobado");
  if (nota2 >= 90) {
    console.log("Nota Excelente");
  }
}

/*
18. Pide un número.
   Si es positivo, dentro del if verifica si es par o impar.
*/
// RESPUESTA AQUÍ 👇

let num5 = parseInt(prompt("Ingrese número:"));
if (num5 > 0) {
  console.log("Número Positivo");
  if (num5 % 2 == 0) {
    console.log("El número es par");
  } else console.log("El número es impar");
}

/*
19. Pide usuario y contraseña.
   Si usuario es "admin", dentro del mismo if verifica si la contraseña es "1234".
   Si ambos coinciden, muestra "Acceso concedido".
*/
// RESPUESTA AQUÍ 👇

let user = prompt("Ingrese Usuario:");
let pass = prompt("Ingrese Contraseña:");

if (user == "admin") {
  if (pass == 1234) {
    console.log("Acceso Concedido");
  }
}

/*
20. Pide dos números.
   Si el primero es mayor, muestra "El primero es mayor".
   Dentro de ese if, verifica si la diferencia es mayor a 10 y muestra "Diferencia grande".
*/
// RESPUESTA AQUÍ

let n1 = parseInt(prompt("Ingrese primer número:"));
let n2 = parseInt(prompt("Ingrese segundo número:"));

if (n1 > n2) {
  console.log("El primer número es mayor");
  if (n1 - n2 > 10) {
    console.log("Diferencia grande");
  }
}

// =======================================================
// SWITCH CASE (EJERCICIOS 21 - 22)
// =======================================================

/*
21. Pide un número del 1 al 7 y muestra el día correspondiente.
   1 = Lunes, 2 = Martes, ..., 7 = Domingo
*/
// RESPUESTA AQUÍ 👇

let number = parseInt(prompt("Ingrese número (1-7):"));
switch (number) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;

  default:
    console.log("Número Incorrecto");
    break;
}

/*
22. Pide un número del 1 al 12 y muestra el mes correspondiente.
*/
// RESPUESTA AQUÍ 👇

let number1 = parseInt(prompt("Ingrese número (1-12):"));
switch (number1) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Mayo");
    break;
  case 6:
    console.log("Junio");
    break;
  case 7:
    console.log("Julio");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Septiembre");
    break;
  case 10:
    console.log("Octubre");
    break;
  case 11:
    console.log("Noviembre");
    break;
  case 12:
    console.log("Diciembre");
    break;

  default:
    console.log("Número Incorrecto");
    break;
}

// =======================================================
// COMBINACIÓN DE TODOS LOS TEMAS (EJERCICIOS 23 - 35)
// =======================================================

/*
23. Pide dos números.
   Usa if-else para mostrar si su suma es par o impar.
*/
// RESPUESTA AQUÍ 👇

/*
24. Pide tres notas, calcula el promedio.
   Usa if-else-if para mostrar:
   - "Excelente" si es mayor a 90
   - "Aprobado" si es mayor o igual a 60
   - "Reprobado" si es menor a 60
*/
// RESPUESTA AQUÍ 👇

/*
25. Pide nombre y edad.
   Usa un if anidado para mostrar:
   - "Hola [nombre], eres mayor de edad"
   - Si tiene 60 o más, agrega también "y adulto mayor"
*/
// RESPUESTA AQUÍ 👇

/*
26. Pide un número del 1 al 5 y usa switch para mostrar una calificación:
   1 = Muy malo, 2 = Malo, 3 = Regular, 4 = Bueno, 5 = Excelente.
*/
// RESPUESTA AQUÍ 👇

/*
27. Pide una letra y determina si es vocal o consonante usando switch.
*/
// RESPUESTA AQUÍ 👇

/*
28. Pide dos números y una operación ("sumar", "restar", "multiplicar", "dividir").
   Usa switch para realizar la operación correspondiente.
*/
// RESPUESTA AQUÍ 👇

/*
29. Pide edad y país.
   Si el país es "Bolivia" y la edad es mayor o igual a 18, muestra "Puede votar".
   Caso contrario, muestra "No puede votar".
*/
// RESPUESTA AQUÍ 👇

/*
30. Pide tres números.
   Determina cuál es el mayor de los tres usando if-else-if.
*/
// RESPUESTA AQUÍ 👇

/*
31. Pide un número y determina:
   - Si es múltiplo de 3 muestra "Fizz"
   - Si es múltiplo de 5 muestra "Buzz"
   - Si es múltiplo de ambos muestra "FizzBuzz"
*/
// RESPUESTA AQUÍ 👇

/*
32. Pide una nota (0 a 100) y muestra:
   "A" si es >= 90
   "B" si es >= 80
   "C" si es >= 70
   "D" si es >= 60
   "F" si es menor de 60
*/
// RESPUESTA AQUÍ 👇

/*
33. Pide nombre de usuario y contraseña.
   Si usuario es "Alfredo" o "Moises" y contraseña es "1234",
   muestra "Acceso autorizado", de lo contrario "Denegado".
*/
// RESPUESTA AQUÍ

let nom1 = prompt("Ingrese su usuario: ");
let pass1 = prompt("Ingrese su contraseña: ");

if ((nom1 == "Alfredo" || nom1 == "Moises") && pass1 == 1234) {
  console.log("Acceso Autorizado");
} else console.log("Acceso Denegado");

/*
34. Pide la cantidad de artículos comprados y el precio por unidad.
   Si compró más de 10 artículos, aplica 10% de descuento.
   Muestra el total a pagar.
*/
// RESPUESTA AQUÍ 👇

/*
35. Ejercicio Final:
   Pide nombre, edad y tres notas.
   Calcula el promedio, determina si aprueba y muestra:
   "Hola [nombre], tienes [edad] años y tu promedio es [promedio]. Aprobado/Reprobado."
   Usa if-else-if o anidado.
*/
// RESPUESTA AQUÍ 👇
