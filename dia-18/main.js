/* funciones de orden superior */
/* function saludar(nombre) {
  console.log("hola amigo: " + nombre);
}
function depedir(nombre) {
  console.log("chau amigo " + nombre);
}
function contratar(nombre) {
  console.log("estas contratado:" + nombre);
} */
//declaramos
function superSuperior(callback1, callback2, nombre) {
  callback1(nombre);
  callback2(nombre);
}
//utilizamos
//funcion q recibe un funcion1 funcion2 y un string
/* superSuperior(saludar, depedir, "Boren");
superSuperior(saludar, contratar, "Ibraim"); */
/* --------------------------------------------------------------- */
/* function superior1(callback, nombre) {
  callback(nombre);
}

superior1(function (nombre) {
  console.log("estoy aqui dentro " + nombre);
}, "David");

superior1((nombre) => {
  console.log("quiero una hamburguesa " + nombre);
}, "Belen"); */
/* ------------CREACION DE FUNCION DE ORDEN SUPERIOR----- */
function recorrido(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

let notas = [32, 77, 55, 32, 82, 91];
let frutas = ["naranja", "manzana", "pera", "papaya"];

recorrido(notas, (nota) => {
  if (nota >= 51) {
    console.log(nota);
  }
});

recorrido(frutas, (fruta) => {
  if (fruta === "papaya") {
    console.log("la papaya esta aqui");
  }
});
/* ----------------FOR EACH------------------------ */
let estudiantes = ["Alfredo", "Belen", "Boren", "David"];

function mostrar(item) {
  console.log(item);
}

estudiantes.forEach(mostrar);
estudiantes.forEach((estudianteItem) => {
  console.log(estudianteItem);
});
//  EJERCICIO 2: Sumar números
// Dado un array de números, usa forEach para sumar todos los valores y mostrar el resultado final en consola.
let numeros = [5, 10, 15, 20];
let suma = 0;

numeros.forEach((num) => {
  suma += num;
});

console.log("Suma de los numeros es " + suma);

//  EJERCICIO 3: Mostrar índice y valor
// Dado un array de frutas, usa forEach para mostrar en consola:
// "En la posición X está la fruta Y"
let frutitas = ["Manzana", "Banana", "Pera", "Sandía"];

let cont = 0;

frutitas.forEach((fruta) => {
  console.log(`En la pos ${cont} está la fruta ${fruta}`);
  cont++;
});

frutitas.forEach((fruta, i) => {
  console.log(`En la pos ${i} está la fruta ${fruta}`);
});

let estudiantesFunval = [
  "DAVID",
  "BOREN",
  "JOSE PELICO",
  "MOISES",
  "BELEN",
  "BOREN",
  "EDMUND",
  "JOSE PELICO",
  "JOSE PELICO",
  "ALFREDO",
];
/* 
    utilizar map para q en los lugares donde Jose Pelico puso su nombre
    puedan cambiarlo x estudiante no registrado
*/

let arrayNuevo1 = estudiantesFunval.map((estu) => {
  if (estu == "JOSE PELICO") {
    return "estudiante no registrado";
  } else {
    return estu;
  }
});

console.log(arrayNuevo1);

let numeroPrimos = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13, 15, 17, 19];
/* 
    x error el profesor Kevin creo una lista de numeros primos pero algunos numeros
    se infiltraron a la lista cambiar los numeros q no son primos x el numero 1 para q todos
    los numeros sean primos
*/

let marcas = [
  "toyota",
  "samsung",
  "lg",
  "sony",
  "paramount",
  "adidas",
  "nike",
  "funval",
];
/* 
    crear una lista nueva con las marcas q tengan mas de 4 letras 
*/

let nuevalista = marcas.filter((marca) => marca.length > 4);

console.log(nuevalista);
