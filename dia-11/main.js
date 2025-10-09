let miString = "Hola, soy un string";
let miNumber = 42;
let miBigInt = 123456789012345678901234n;
let miBoolean = true;
let miUndefined;
let miNull = null;
let miSymbol = Symbol("soy un símbolo único");

console.log("tipos de datos antes");
console.log("miString:", typeof miString);
console.log("miNumber:", typeof miNumber);
console.log("miBigInt:", typeof miBigInt);
console.log("miBoolean:", typeof miBoolean);
console.log("miUndefined:", typeof miUndefined);
console.log("miNull:", typeof miNull);
console.log("miSymbol:", typeof miSymbol);

miString = 100;
miNumber = false;
miBigInt = "Ahora soy un string";

console.log("\nTipos cambiados:");
console.log("miString (cambiada):", typeof miString);
console.log("miNumber (cambiada):", typeof miNumber);
console.log("miBigInt (cambiada):", typeof miBigInt);

/* ------------------------------------------------------------------------------ */
// =======================================================
// OPERADORES ARITMÉTICOS (EJERCICIOS 1 - 8)
// =======================================================

/*
1. Declara dos variables a y b con valores numéricos.
   Muestra en consola su suma, resta, multiplicación y división.
*/
// RESPUESTA AQUÍ 👇
let aa = 123;
let bb = 322;
console.log(aa + bb);
console.log(aa - bb);
console.log(aa * bb);
console.log(aa / bb);
/*
2. Calcula el área de un rectángulo (base * altura).
   Muestra el resultado en consola.
*/
// RESPUESTA AQUÍ 👇

let base = 5;
let altura = 10;
console.log(base * altura);

/*
3. Calcula el área de un triángulo usando la fórmula (base * altura) / 2.
*/
// RESPUESTA AQUÍ 👇

console.log((base * altura) / 2);

/*
4. Calcula el módulo (resto) de dividir 25 entre 4.
   Usa el operador %.
*/
// RESPUESTA AQUÍ 👇

let a = 25;
let b = 4;
console.log(a % b);

/*
5. Declara una variable "numero" y muestra su cuadrado y su cubo.
   Usa los operadores **2 y **3.
*/
// RESPUESTA AQUÍ 👇

let numero = 9;
console.log(numero ** 2);
console.log(numero ** 3);

/*
6. Calcula el perímetro de un cuadrado con lado = 5.
   Fórmula: lado * 4
*/
// RESPUESTA AQUÍ 👇

let lado = 5;
console.log(lado * 4);
/*
7. Declara dos números y muestra si su suma es par o impar.
   Usa el operador % para comprobar si el resto es 0.
*/
// RESPUESTA AQUÍ 👇

let num1 = 5;
let num2 = 6;

resultado = num1 + num2;
resultado % 2 === 0 ? console.log("Es par") : console.log("Es impar");

/*
8. Calcula el promedio de tres notas y muestra el resultado en consola.
*/
// RESPUESTA AQUÍ 👇

let nota1 = 50;
let nota2 = 60;
let nota3 = 51;

console.log((nota1 + nota2 + nota3) / 3);

// =======================================================
// OPERADORES DE ASIGNACIÓN (EJERCICIOS 9 - 12)
// =======================================================

/*
9. Declara una variable x = 10.
   Usa x += 5 y muestra el nuevo valor.
*/
// RESPUESTA AQUÍ 👇

let x = 10;
console.log((x += 5));

/*
10. Declara una variable puntos = 100.
    Resta 20 puntos usando puntos -= 20 y muestra el resultado.
*/
// RESPUESTA AQUÍ 👇
let puntos = 100;
console.log((puntos -= 20));

/*
11. Declara precio = 50.
    Duplica su valor usando precio *= 2 y muestra el resultado.
*/
// RESPUESTA AQUÍ 👇

let precio = 50;
console.log((precio *= 2));

/*
12. Declara saldo = 200.
    Divide su valor entre 4 usando saldo /= 4 y muestra el nuevo saldo.
*/
// RESPUESTA AQUÍ 👇

let saldo = 200;
console.log((saldo /= 4));

// =======================================================
// OPERADORES DE COMPARACIÓN (EJERCICIOS 13 - 16)
// =======================================================

/*
13. Declara dos variables numéricas.
    Muestra si son iguales (==) o diferentes (!=).
*/
// RESPUESTA AQUÍ 👇

let n1 = 3;
let n2 = 4;

n1 == n2 ? console.log("Es igual") : console.log("Es diferente");

/*
14. Declara edad = 17.
    Muestra si es mayor o igual a 18 (edad >= 18).
*/
// RESPUESTA AQUÍ 👇
let edad = 17;

edad >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");

/*
15. Declara dos variables a = 10, b = "10".
    Muestra el resultado de a == b y a === b para ver la diferencia.
*/
// RESPUESTA AQUÍ 👇

let a1 = 10;
let b1 = "10";

console.log(a1 == b1);
console.log(a1 === b1);

/*
16. Declara dos variables c = 15, d = 20.
    Muestra si c es menor que d y si c es mayor o igual que d.
*/
// RESPUESTA AQUÍ 👇

let c = 15;
let d = 20;

console.log(c < d);
console.log(c >= d);

c < d
  ? console.log("C es menor que D")
  : c == d
  ? console.log("C igual a D")
  : console.log("C es mayor que D");

// =======================================================
// OPERADORES LÓGICOS (EJERCICIOS 17 - 20)
// =======================================================

/*
17. Declara tieneLicencia = true y tieneAuto = false.
    Usa && (AND) para verificar si puede conducir.
*/
// RESPUESTA AQUÍ 👇

let tieneLicencia = true;
let tieneAuto = false;

tieneLicencia == true && tieneAuto == true
  ? console.log("Puede conducir")
  : console.log("No puede conducir");

/*
18. Declara esMayor = true y tieneEntrada = false.
    Usa || (OR) para verificar si puede entrar al cine.
*/
// RESPUESTA AQUÍ 👇

let esMayor = true;
let tieneEntrada = false;

esMayor == true || tieneEntrada == true
  ? console.log("Puede Entrar al cine")
  : console.log("No puede entrar");

/*
19. Declara variable conectado = false.
    Usa ! (NOT) para mostrar el valor contrario.
*/
// RESPUESTA AQUÍ 👇

let conectado = false;

console.log(!conectado);

/*
20. Declara edad = 25 y nacionalidad = "boliviana".
    Usa operadores lógicos para verificar si puede votar
    (edad >= 18 && nacionalidad == "boliviana").
*/
// RESPUESTA AQUÍ 👇

let edad1 = 25;
let nacionalidad = "Boliviana";

edad1 >= 18 && nacionalidad == "Boliviana"
  ? console.log("Puede Votar")
  : console.log("No puede votar");

// =======================================================
// COMBINACIÓN DE TODOS LOS TEMAS (EJERCICIOS 21 - 30)
// =======================================================

/*
21. Declara dos números y muestra su suma.
    Luego, verifica si el resultado es mayor que 50.
*/
// RESPUESTA AQUÍ 👇

/*
22. Declara tres notas (nota1, nota2, nota3).
    Calcula el promedio y muestra si aprobó (promedio >= 60).
*/
// RESPUESTA AQUÍ 👇

/*
23. Declara nombre y edad.
    Muestra un mensaje como:
    "Hola Kevin, tienes 20 años. ¿Eres mayor de edad? true"
*/
// RESPUESTA AQUÍ 👇

/*
24. Declara precioProducto y dineroDisponible.
    Muestra si puedes comprar el producto (dineroDisponible >= precioProducto).
*/
// RESPUESTA AQUÍ 👇

/*
25. Declara base y altura.
    Calcula el área de un triángulo (base * altura) / 2.
*/
// RESPUESTA AQUÍ 👇

/*
26. Declara edad, tieneCedula y tienePasaje.
    Usa operadores lógicos para saber si puede viajar.
    (edad >= 18 && tieneCedula && tienePasaje)
*/
// RESPUESTA AQUÍ 👇

edad = 25;
let tieneCedula = true;
let tienePasaje = false;

edad >= 18 && tieneCedula && tienePasaje
  ? console.log("Si puede viajar")
  : console.log("No puede viajar");

/*
27. Declara saldo = 100 y gasto = 30.
    Usa operadores de asignación para restar el gasto y mostrar el nuevo saldo.
*/
// RESPUESTA AQUÍ 👇

/*
28. Declara a = 10, b = 5.
    Muestra si la suma es par o impar (usa %).
*/
// RESPUESTA AQUÍ 👇

/*
29. Declara usuario = "Kevin" y password = "1234".
    Usa && para verificar si ambos son correctos.
*/
// RESPUESTA AQUÍ 👇

/*
30. Ejercicio Final:
    Declara tus datos y calcula tu promedio.
    Luego, muestra un mensaje completo.

    let nombre = "Kevin";
    let edad = 28;
    let nota1 = 70;
    let nota2 = 80;

    let promedio = (nota1 + nota2) / 2;
    let aprobado = promedio >= 60;

    console.log(`Hola ${nombre}, tienes ${edad} años, tu promedio es ${promedio}, aprobado: ${aprobado}`);
*/
// RESPUESTA AQUÍ 👇

console.log("----INTERNET PUNTO GEEK----");
let esVaron = true;

let user = "Kevin";
let age = 18;

let saldoDisp = 30;
let tiempoRest = 30 / 5;

esVaron === true && age > 17 && age < 35
  ? saldoDisp > 10
    ? console.log(
        "Puedes ingresar al Internet. Saldo disponible: ",
        saldoDisp,
        " Tiempo restante de juego: ",
        tiempoRest
      )
    : console.log(
        "Tu saldo disponible es: ",
        saldoDisp,
        "Tiempo restante de juego: ",
        tiempoRest,
        " ALERTA: Tu saldo es mínimo, debes recargar"
      )
  : console.log(
      "No puedes ingresar al Internet, no cumple con los requisitos."
    );
